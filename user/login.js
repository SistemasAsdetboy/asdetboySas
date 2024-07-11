import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const auth = getAuth();

document.getElementById("login").addEventListener('click', async function() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Verificación de campos vacíos
  if (!email || !password) {
    displayMessage("Por favor, completa todos los campos.");
    return;
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // Inicio de sesión exitoso
    const user = userCredential.user;
    displayMessage("¡Inicio de sesión exitoso!", true);
    
    // Redirigir a panel de admnistrador 

    window.location.href = "../user/admin.html"; 


  } catch (error) {
    // Manejo de errores
    const errorMessage = error.message;
    displayMessage(`credenciales incorrectas, intente de nuevo.`);
  }
});

function displayMessage(message, success = false) {
  if (success) {
    // Mensaje de éxito
    window.alert(`${message}`);
  } else {
    // Mensaje de error
    window.alert(`Error: ${message}`);
  }
}

const passwordInput = document.getElementById("password");
const togglePasswordBtn = document.getElementById("togglePassword");
const icon = togglePasswordBtn.querySelector('img');

togglePasswordBtn.addEventListener('click', function() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.src = "../assets/img/login/ojo.png"; 
} else {
    passwordInput.type = "password";
    icon.src = "../assets/img/login/cerrar-ojo.png";
}

});