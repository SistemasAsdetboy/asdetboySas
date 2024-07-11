const divOverlap = document.querySelector('.overlap');

const imagenPagout = document.createElement('img');
imagenPagout.src = 'https://c.animaapp.com/FWFwKp8N/img/pagout-1.png';
imagenPagout.classList.add('pagout'); 

const parrafoTexto = document.createElement('p');
parrafoTexto.textContent = '¡Obras en marcha! Mejorando para ti... Vuelve pronto!';
parrafoTexto.classList.add('obras'); 

const divNoDisponible = document.createElement('div');
divNoDisponible.textContent = 'Sección no disponible.';
divNoDisponible.classList.add('seccNo'); 

// Agrega los elementos al div "overlap"
divOverlap.appendChild(imagenPagout);
divOverlap.appendChild(parrafoTexto);
divOverlap.appendChild(divNoDisponible);

// Oculta la imagen y los textos al principio
imagenPagout.style.display = 'none';
parrafoTexto.style.display = 'none';
divNoDisponible.style.display = 'none';

panelPrincipal.addEventListener('click', function() {
    // Muestra la imagen y los textos al hacer clic en panelPrincipal
    imagenPagout.style.display = 'block';
    parrafoTexto.style.display = 'block';
    divNoDisponible.style.display = 'block';
});


