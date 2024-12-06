//thomas thédié
//j'ai choisi de stocker les reponses comme ça pour le faire j'ai du rentrer dans value les même chose que en texte sinon ça ne pouvais pas fonctionner 
const correctAnswers = {
    q1: ["SQL", "PHP"], 
    q2: ["Protéger les données"],
    q3: ["Une distribution Linux"],
    q4: ["Modifie les permissions d'un fichier"],
    q5: ["SSH"],
    q6: ["Diviser un réseau en sous-réseaux"],
    q7: ["Un outil de virtualisation"],
    q8: ["Créer un environnement isolé"],
    q9: ["chmod +x"],
    q10: ["Protège les données personnelles"]
};

// Fonction de correction pour calculer le score on doit utiliser .sort/.join/ car les donnée sont stocker en chaine de caratére 
function testQCM() {
    let score = 0;

    Object.entries(correctAnswers).forEach(([questionId, correctAnswer]) => {
        const checkedAnswers = [...document.querySelectorAll(`#${questionId} input:checked`)]
            .map(checkbox => checkbox.value);

        if (checkedAnswers.sort().join() === correctAnswer.sort().join()) {
            score++;
        }
    });

    alert(`Votre score est : ${score}/10`);  // Correction de la syntaxe pour l'alerte
}

// Lier l'événement pour la correction
document.getElementById("check-btn").addEventListener("click", testQCM);

// Lier l'événement pour la solution ne surtout pas oublier le window.open sinon on ne peut fermer la fenetre 
document.getElementById("solution-btn").addEventListener("click", () => window.open("corrections.html", "_blank", "width=800,height=600"));

// Fonction pour fermer la fenêtre
function closePage() {
    window.close(); // Ferme la fenêtre ou l'onglet actuel
}
