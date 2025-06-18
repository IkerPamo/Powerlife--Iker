let index = 0; // Empezamos desde la primera imagen
const images = document.querySelectorAll('.carrusel-item'); // Seleccionamos todas las imágenes del carrusel

function showNextImage() {
    index = (index + 1) % images.length; // Incrementamos el índice, si llegamos al final, volvemos al principio
    updateCarousel();
}

function showPreviousImage() {
    index = (index - 1 + images.length) % images.length; // Retrocedemos el índice, si llegamos al principio, volvemos al final
    updateCarousel();
}

function updateCarousel() {
    const offset = -index * 100; // Movemos el carrusel hacia la izquierda por el ancho de una imagen
    document.querySelector('.carrusel').style.transform = `translateX(${offset}%)`;
}

// Cambiamos la imagen cada 3 segundos de forma automática
setInterval(showNextImage, 3000);

// Opción para cambiar la imagen manualmente
document.querySelector('.carrusel-container').addEventListener('click', showNextImage);

// Inicializamos el carrusel con la primera imagen
updateCarousel();

