const newsList = document.querySelectorAll("#news-list li");
let currentIndex = 0;

// Mostrar la primera noticia al cargar
newsList.forEach((li, index) => {
    li.style.display = index === 0 ? "block" : "none";
});

// Botón “Siguiente”
document.getElementById("next-btn").onclick = () => {
    // Ocultar la noticia actual
    newsList[currentIndex].style.display = "none";

    // Pasar a la siguiente, vuelve al inicio si es la última
    currentIndex = (currentIndex + 1) % newsList.length;

    // Mostrar la siguiente noticia
    newsList[currentIndex].style.display = "block";

    // Actualizar indicador si lo tienes
    const indicator = document.getElementById("news-indicator");
    if (indicator) {
        indicator.innerText = `Notícia ${currentIndex + 1} de ${newsList.length}`;
    }
};
