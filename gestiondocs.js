import { getFirestore, collection, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js";

const db = getFirestore();
const storage = getStorage();

let tipodoc = document.getElementById("tipodocumento");
let añodoc = document.getElementById("añodoc");
let subfolder = document.getElementById("subfolder");
let nombredoc = document.getElementById("nombredoc");
let urldoc;

const docRef = collection(db, "Documentos gestión contractual");

document.getElementById("upload").addEventListener('click', async function() {
    var form = document.getElementById('uploadForm');
    if (form.checkValidity()) {
        const file = document.querySelector("#pdf-file").files[0];
        const storageRef = ref(storage, "Gestión Contractual/"+tipodoc.value+"/"+añodoc.value+"/"+subfolder.value+"/"+file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            function progress(snapshot) {
                const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + percentage + "% done");
            },
            function error(err) {
                console.error(err);
                document.getElementById('errorMessage').classList.remove('d-none');
                document.getElementById('successMessage').classList.add('d-none');
            },
            async function complete() {
                try {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    console.log("File available at", downloadURL);
                    urldoc = downloadURL;

                    const docID = tipodoc.value + "-" + subfolder.value + "-" + añodoc.value + "-" + nombredoc.value;

                    await setDoc(doc(docRef, docID), {
                        Tipo_documento: tipodoc.value,
                        Año: añodoc.value,
                        Subcarpeta: subfolder.value + " de " + añodoc.value,
                        Nombre_documento: nombredoc.value,
                        url_documento: urldoc
                    });

                    console.log("Document written");
                    form.reset(); // Limpiar el formulario
                } catch (error) {
                    console.error("Error adding document: ", error);
                    document.getElementById('errorMessage').classList.remove('d-none');
                    document.getElementById('successMessage').classList.add('d-none');
                }
            }
        );
    } else {
        // Si el formulario no es válido, mostrar el mensaje de error
        
    }
});
