// Definición de la función showPersonaFields fuera de $(document).ready
function showPersonaFields(selectedPersona) {
  // Oculta todos los campos específicos y los desactiva
  $('#personaNaturalFields, #personaJuridicaFields, #anonimoFields').hide().find(':input').prop('disabled', true);

  // Muestra los campos específicos según el tipo de persona seleccionado y los activa
  if (selectedPersona === 'natural') {
    $('#personaNaturalFields').show().find(':input').prop('disabled', false);
  } else if (selectedPersona === 'juridico') {
    $('#personaJuridicaFields').show().find(':input').prop('disabled', false);
  } else if (selectedPersona === 'anonimo') {
    $('#anonimoFields').show().find(':input').prop('disabled', false);
  }
}

// Función principal dentro de $(document).ready
$(document).ready(function() {
  // Evento de cambio en el tipo de persona
  $('#tipoPersona').change(function() {
    var selectedPersona = $(this).val();
    showPersonaFields(selectedPersona);
  });

  // Validación y envío del formulario
  $('#pqrsForm').submit(function(event) {
    var form = $(this);
    var isValid = true;

    // Validación de campos obligatorios visibles
    form.find(':input[required]:visible').each(function() {
      if (!$(this).val()) {
        isValid = false;
        return false; 
      }
    });

    // Mostrar mensajes de error si es necesario
    if (!isValid) {
      $('#errorMessages').show();
      event.preventDefault(); 
    } else {
      $('#errorMessages').hide(); 
    }
  });
});


//Open Modal

function openModal() {
  var modal = document.getElementById('modal');
  modal.style.display = 'block';
}


function closeModal() {
  var modal = document.getElementById('modal');
  modal.style.display = 'none';
}


var openModalBtn = document.getElementById('openModalBtn');


openModalBtn.addEventListener('click', function() {
  event.preventDefault();
  openModal();
});


var closeModalBtn = document.getElementsByClassName('close')[0];

closeModalBtn.addEventListener('click', function() {
  closeModal();
});


window.addEventListener('click', function(event) {
  var modal = document.getElementById('modal');
  if (event.target == modal) {
    closeModal();
  }
});

