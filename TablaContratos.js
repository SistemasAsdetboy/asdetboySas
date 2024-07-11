import { getFirestore, collection, doc, deleteDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js";

const db = getFirestore();
const storage = getStorage();
let docRef; // Variable para almacenar la referencia a la colección

const resultList = document.getElementById('resultList');
const tipodoc = document.getElementById("tipodoc");
const ano = document.getElementById("ano");
const subcarpetaSelect = document.getElementById("subcarpeta");

let documentos = []; // Array para almacenar todos los documentos

window.addEventListener('load', async () => {
    docRef = collection(db, "Documentos gestión contractual"); // Asignar la referencia a la colección
    await cargarDocumentos();
    cargarTiposDocumento();
    cargarSubcarpetas();
    llenarTabla(); 
});

tipodoc.addEventListener('change', () => {
    cargarSubcarpetas();
    llenarTabla();
});

subcarpetaSelect.addEventListener('change', () => {
    llenarTabla();
}); 

ano.addEventListener('change', () => {
    cargarSubcarpetas();
    llenarTabla();
}); 

async function cargarTiposDocumento() {
    try {
        const queryRef = collection(db, "Documentos gestión contractual");
        const querySnapshot = await getDocs(queryRef);

        const tiposDocumentoSet = new Set();

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            tiposDocumentoSet.add(data.Tipo_documento);
        });

        // Limpiamos el select para evitar duplicados
        tipodoc.innerHTML = '<option value="todos">Todos</option>';

        tiposDocumentoSet.forEach(tipoDoc => {
            const option = document.createElement('option');
            option.value = tipoDoc;
            option.textContent = tipoDoc;
            tipodoc.appendChild(option);
        });

    } catch (error) {
        console.error("Error obteniendo tipos de documento: ", error);
    }
}

async function cargarSubcarpetas() {
    subcarpetaSelect.innerHTML = '<option value="todos">Todos</option>';

    try {
        const tipoDocSeleccionado = tipodoc.value;
        const añoSeleccionado = ano.value;

        const subcarpetasSet = new Set();

        documentos.forEach(data => {
            if ((tipoDocSeleccionado === "todos" || data.Tipo_documento === tipoDocSeleccionado) && data.Año === añoSeleccionado) {
                subcarpetasSet.add(data.Subcarpeta);
            }
        });

        subcarpetasSet.forEach(subcarpeta => {
            const option = document.createElement('option');
            option.value = subcarpeta;
            option.textContent = subcarpeta;
            subcarpetaSelect.appendChild(option);
        });

        subcarpetaSelect.disabled = false;

    } catch (error) {
        console.error("Error obteniendo subcarpetas: ", error);
    }
} 

async function cargarDocumentos() {
    try {
        const queryRef = collection(db, "Documentos gestión contractual");
        const querySnapshot = await getDocs(queryRef);

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            documentos.push(data);
        });

        // Ordenar los documentos por año de menor a mayor
        documentos.sort((a, b) => a.Año - b.Año);

    } catch (error) {
        console.error("Error obteniendo documentos: ", error);
    }
}

async function llenarTabla() {

    const loader = document.getElementById('loader');
    loader.classList.remove('hidden');

    resultList.innerHTML = '';
    const noResultsDiv = document.getElementById('noResults');
    noResultsDiv.style.display = 'none';

    try {
        const tipoDoc = tipodoc.value;
        const añoSeleccionado = ano.value;
        const subcarpetaSeleccionada = subcarpetaSelect.value;

        const filteredDocuments = documentos.filter(data => {
            return (tipoDoc === "todos" || data.Tipo_documento === tipoDoc) &&
                   (añoSeleccionado === "todos" || data.Año === añoSeleccionado) &&
                   (subcarpetaSeleccionada === "todos" || data.Subcarpeta === subcarpetaSeleccionada);
        });

        if (filteredDocuments.length === 0) {
            noResultsDiv.style.display = 'block';
            return;
        }

        filteredDocuments.forEach((data) => {
            const row = document.createElement('tr');
            const tipoDocumentoCell = document.createElement('td');
            const añoCell = document.createElement('td');
            const subcarpetaCell = document.createElement('td');
            const nombreDocumentoCell = document.createElement('td');
            const verDocumentoLink = document.createElement('a');

            tipoDocumentoCell.textContent = data.Tipo_documento;
            añoCell.textContent = data.Año;
            subcarpetaCell.textContent = data.Subcarpeta;
            nombreDocumentoCell.textContent = data.Nombre_documento;

            verDocumentoLink.textContent = 'Ver documento';
            verDocumentoLink.href = data.url_documento;
            verDocumentoLink.target = '_blank';

            const documentoCell = document.createElement('td');
            documentoCell.appendChild(verDocumentoLink);

            row.appendChild(tipoDocumentoCell);
            row.appendChild(añoCell);
            row.appendChild(subcarpetaCell);
            row.appendChild(nombreDocumentoCell);
            row.appendChild(documentoCell);

            if (document.getElementById('tablaResultados') && document.getElementById('tablaResultados').classList.contains('eliminar-elementos')) {
                const eliminarCell = document.createElement('td');
                const eliminarIcon = document.createElement('img');
                eliminarIcon.src = 'https://img.icons8.com/ios-glyphs/18/4aab0a/filled-trash.png';
                eliminarIcon.alt = 'Eliminar';
                eliminarIcon.classList.add('eliminar-icono');
                eliminarIcon.addEventListener('click', () => {
                    // Confirmar eliminación con el usuario
                    if (confirm("¿Estás seguro de que deseas eliminar este documento?")) {
                        const docID = data.Tipo_documento + "-" + data.Subcarpeta.split(" ")[0] + "-" + data.Año + "-" + data.Nombre_documento;
                        console.log("ID del documento a eliminar:", docID);
                        eliminarDocumento(docRef, docID, row, data.url_documento); // Pasar docRef y la URL del documento como parámetros adicionales
                    }
                });
                eliminarCell.appendChild(eliminarIcon);
                row.appendChild(eliminarCell);
            }
            
            resultList.appendChild(row);
        });
    } catch (error) {
        console.error("Error llenando la tabla: ", error);
    } finally {
        // Oculta el loader después de cargar los resultados
        loader.classList.add('hidden');
    }
}

async function eliminarDocumento(docRef, docID, row, urlDocumento) {
    try {
        await deleteDoc(doc(docRef, docID));
        console.log("Documento eliminado correctamente:", docID);
        row.remove(); // Eliminar la fila de la tabla después de eliminar el documento
        await eliminarArchivo(urlDocumento); // Eliminar el archivo correspondiente en Firebase Storage
        await cargarDocumentos(); // Actualizar la lista de documentos
    } catch (error) {
        console.error("Error al eliminar el documento: ", error);
        alert("Hubo un error al intentar eliminar el documento. Por favor, inténtalo de nuevo.");
    }
}

async function eliminarArchivo(urlDocumento) {
    try {
        // Obtener el nombre del archivo a partir de la URL del documento
        const url = new URL(urlDocumento);
        const fileName = decodeURIComponent(url.pathname.split('/').pop());
        
        // Construir la referencia al archivo en Firebase Storage
        const archivoRef = ref(storage, fileName);
        
        // Eliminar el archivo
        await deleteObject(archivoRef);
        
        console.log(`Archivo "${fileName}" eliminado correctamente.`);
    } catch (error) {
        console.error("Error al eliminar el archivo:", error);
    }
}
