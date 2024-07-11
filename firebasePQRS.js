import { getFirestore, collection, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js";

const db = getFirestore();
const storage = getStorage();

// Obtener una referencia a la colección de PQRS en Firestore
const pqrsCollection = collection(db, "PQRS");

// Función para enviar datos del formulario a Firestore
async function enviarDatosPQRS(datosPQRS, downloadURL) {
    try {
        // Generar el nombre del documento
        const nombreDocumento = generarNombreDocumento(datosPQRS.tipoPQRS);

        // Guardar los datos del PQRS en Firestore junto con la URL del documento adjunto
        await setDoc(doc(pqrsCollection, nombreDocumento), {
            ...datosPQRS,
            adjuntarDocumentosURL: downloadURL
        });

        console.log("PQRS registrado con éxito en Firestore");
        // Aquí puedes mostrar un mensaje de éxito al usuario
    } catch (error) {
        console.error("Error al registrar el PQRS en Firestore: ", error);
        // Aquí puedes mostrar un mensaje de error al usuario
    }
}

// Evento de envío del formulario
document.getElementById('pqrsForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe por defecto
    
    try {
        // Obtener los datos del formulario
        const datosPQRS = {
            tipoPQRS: document.getElementById("tipoPQRS").value,
            tipoPersona: document.getElementById("tipoPersona").value,
            nombres: document.getElementById("nombres").value,
            apellidos: document.getElementById("apellidos").value,
            tipoDocumento: document.getElementById("tipoDocumento").value,
            numeroDocumento: document.getElementById("numeroDocumento").value,
            correo: document.getElementById("correo").value,
            telefono: document.getElementById("telefono").value,
            notificacionCorreo: document.getElementById("notificacionCorreo").checked,
            notificacionTelefono: document.getElementById("notificacionTelefono").checked,
            paisNotificacion: document.getElementById("paisNotificacion").value,
            deptoNotificacion: document.getElementById("deptoNotificacion").value,
            munNotificacion: document.getElementById("munNotificacion").value,
            direccionNotificacion: document.getElementById("direccionNotificacion").value,
            autorizaNotificacion: document.getElementById("autorizaNotificacion").checked,
            paisHechos: document.getElementById("paisHechos").value,
            deptoHechos: document.getElementById("deptoHechos").value,
            munHechos: document.getElementById("munHechos").value,
            direccionHechos: document.getElementById("direccionHechos").value,
            fechaHechos: document.getElementById("fechaHechos").value,
            descripcionHechos: document.getElementById("descripcionHechos").value,
            aceptarTratamientoDatos: document.getElementById("aceptarTratamientoDatos").checked,
            nombreEntidad: document.getElementById("nombreEntidad").value,
            nit: document.getElementById("nit").value,
            correoJuridico: document.getElementById("correoJuridico").value,
            telefonoJuridico: document.getElementById("telefonoJuridico").value,
            pbx: document.getElementById("pbx").value,
            correoAnonimo: document.getElementById("correoAnonimo").value
        };

        // Generar el nombre del documento
        const nombreDocumento = generarNombreDocumento(datosPQRS.tipoPQRS);

        // Si se adjuntaron documentos, subirlos al Storage de Firebase
        if (document.getElementById("adjuntarDocumentos").files.length > 0) {
            const file = document.getElementById("adjuntarDocumentos").files[0];
            const storageRef = ref(storage, `PQRS/${nombreDocumento}/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                function progress(snapshot) {
                    const percentage =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is " + percentage + "% done");
                },
                function error(err) {
                    console.log(err);
                },
                async function complete() {
                    try {
                        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                        console.log("File available at", downloadURL);
                        
                        // Enviar los datos del formulario a Firestore
                        await enviarDatosPQRS(datosPQRS, downloadURL);
                    } catch (error) {
                        console.error("Error getting download URL: ", error);
                    }
                }
            );
        } else {
            // Si no se adjuntaron documentos, enviar los datos del formulario a Firestore directamente
            await enviarDatosPQRS(datosPQRS, '');
        }
    } catch (error) {
        console.error("Error al procesar el formulario: ", error);
        // Aquí puedes mostrar un mensaje de error al usuario
    }
});

// Función para generar el nombre del documento
function generarNombreDocumento(tipoPQRS) {
    const year = new Date().getFullYear();
    const numeroPeticion = Math.floor(Math.random() * 1000); // Número aleatorio para evitar colisiones
    return tipoPQRS.charAt(0) + year + numeroPeticion.toString().padStart(3, '0');
}



