const newsList = document.querySelectorAll("#news-list li");
let currentIndex = 0;

// Mostrar la primera noticia al cargar
newsList.forEach((li, index) => {
    li.style.display = index === 0 ? "block" : "none";
});

// Botó “Seguent”
document.getElementById("next-btn").onclick = () => {
    // Ocultar la noticia actual
    newsList[currentIndex].style.display = "none";

    currentIndex = (currentIndex + 1) % newsList.length; // Torna a començar

    newsList[currentIndex].style.display = "block";
};
