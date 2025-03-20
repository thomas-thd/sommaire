document.addEventListener("DOMContentLoaded", function () {
    console.log("Script chargé !");

    // === Effet Matrix ===
    const matrixContainer = document.createElement('div');
    matrixContainer.classList.add('matrix');
    document.body.appendChild(matrixContainer);

    function createMatrixEffect() {
        for (let i = 0; i < 100; i++) {
            let span = document.createElement('span');
            span.textContent = Math.random() > 0.5 ? "0" : "1"; // Texte binaire
            span.style.position = "absolute";
            span.style.top = "-10px";
            span.style.left = `${Math.random() * 100}vw`;
            span.style.color = "#00ff00";
            span.style.fontSize = `${Math.random() * 10 + 10}px`; // Taille aléatoire
            span.style.opacity = "1";
            span.style.animation = `matrixFall ${Math.random() * 3 + 2}s linear infinite`;
            matrixContainer.appendChild(span);
        }
    }

    createMatrixEffect();
});
