import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const auth = getAuth();

// Código para el logout
const logoutButton = document.querySelector('.group-4');

logoutButton.addEventListener('click', async function() {
  // Mostrar mensaje de confirmación
  const confirmed = window.confirm("¿Estás seguro de que deseas cerrar sesión?");

  if (confirmed) {
    try {
      await signOut(auth);
      // Cierre de sesión exitoso
      displayMessage("¡Cierre de sesión exitoso!", true);

      // Redirigir a la página de inicio de sesión u otra página de tu elección
      window.location.href = "../user/login.html";

    } catch (error) {
      // Manejo de errores
      const errorMessage = error.message;
      displayMessage(`Error al cerrar sesión: ${errorMessage}`);
    }
  } else {
    // El usuario canceló el cierre de sesión
    displayMessage("Cierre de sesión cancelado.");
  }
});

function displayMessage(message, success = false) {
  if (success) {
    // Mensaje de éxito
    window.alert(`${message}`);
  } else {
    // Mensaje informativo
    window.alert(`${message}`);
  }
}
