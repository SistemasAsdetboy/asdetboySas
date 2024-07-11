import { getFirestore, collection, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js";

const db = getFirestore();
const storage = getStorage(); 

let titulo = document.getElementById("titulo");
let nameMunicipio = document.getElementById("nombreMunicipio")
let introduccion = document.getElementById("Introduccion");
let añoFundacion = document.getElementById("anioFundacion");
let fundador = document.getElementById("Fundador");     
let Intervencion = document.getElementById("IntervencionRealizada");
let añoIntervencion = document.getElementById("anioIntervencion");
let imgTabla = document.getElementById("TablaIntervencion");
let imgMapa = document.getElementById("MapaIntervencion");
let Descripcion = document.getElementById("DescripcionMapa");
let Evidencia = document.getElementById("EvidenciaFotografica");

const docRef = collection(db, "Informes de gestión"); 

document.getElementById("subir").addEventListener('click', async function() {
    try {
        let informeData = {
            titulo: titulo.value,
            nombreMunicipio: nameMunicipio.value,
            introduccion: introduccion.value,
            añoFundacion: añoFundacion.value,
            fundador: fundador.value,
            Intervencion: Intervencion.value,
            añoIntervencion: añoIntervencion.value,
            Descripcion: Descripcion.value
        };

        // Subir archivos y obtener URLs
        const tablaFile = imgTabla.files[0];
        const mapaFile = imgMapa.files[0];
        const evidenciaFiles = Evidencia.files;

        // Subir tabla de intervención
        const tablaRef = ref(storage, `tablas/${tablaFile.name}`);
        const tablaSnapshot = await uploadBytesResumable(tablaRef, tablaFile);
        const tablaURL = await getDownloadURL(tablaSnapshot.ref);

        // Subir mapa de intervención
        const mapaRef = ref(storage, `mapas/${mapaFile.name}`);
        const mapaSnapshot = await uploadBytesResumable(mapaRef, mapaFile);
        const mapaURL = await getDownloadURL(mapaSnapshot.ref);

        // Subir evidencia fotográfica
        let evidenciaURLs = [];
        for (const file of evidenciaFiles) {
            const evidenciaRef = ref(storage, `evidencia/${file.name}`);
            const evidenciaSnapshot = await uploadBytesResumable(evidenciaRef, file);
            const evidenciaURL = await getDownloadURL(evidenciaSnapshot.ref);
            evidenciaURLs.push(evidenciaURL);
        }

        informeData.tablaURL = tablaURL;
        informeData.mapaURL = mapaURL;
        informeData.evidenciaURLs = evidenciaURLs;

        // Obtener el año de intervención
        const añoDeIntervencion = añoIntervencion.value;

        // Asegúrate de que el añoDeIntervencion no sea undefined o null
        if (!añoDeIntervencion) {
            throw new Error("El año de intervención no puede estar vacío.");
        }

        // Construir el ID del documento
        const informeID = `${nameMunicipio.value}-${añoDeIntervencion}`;

        // Crear una referencia al documento con el ID personalizado
        const informeDocRef = doc(docRef, informeID);

        // Guardar los datos en Firestore
        await setDoc(informeDocRef, informeData);

        alert("El informe se ha subido correctamente.");
    } catch (error) {
        alert("Error al subir el informe: " + error.message);
        console.error(error);
    }
});
