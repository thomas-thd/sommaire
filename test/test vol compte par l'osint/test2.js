// Fonction pour gérer la réinitialisation du mot de passe
function handlePasswordReset(event) {
    event.preventDefault();
    
    const selectedQuestion = document.getElementById('question').value;
    const response = document.getElementById('response-input').value.trim().toLowerCase();

    const correctAnswers = {
        1: 'ville1', // Remplacer par la bonne réponse
        2: 'lucas', // Remplacer par le nom du frère
        3: 'pasta', // Remplacer par le plat préféré
        4: 'lycée1', // Remplacer par le nom du lycée
    };

    const responseElement = document.getElementById('response');
    const passwordDisplay = document.getElementById('password-display');  // Un élément pour afficher le mot de passe

    if (response === correctAnswers[selectedQuestion]) {
        responseElement.textContent = 'Réponse correcte ! Voici votre mot de passe :';
        responseElement.style.color = 'green';

        // Récupération du mot de passe depuis le localStorage ou définition d'un mot de passe par défaut
        const savedPassword = localStorage.getItem('savedPassword') || 'correctpassword';  // Récupère le mot de passe sauvegardé
        passwordDisplay.textContent = `Mot de passe : ${savedPassword}`;  // Affiche le mot de passe
        passwordDisplay.style.color = 'blue';
    } else {
        responseElement.textContent = 'Désolé, la réponse est incorrecte. Veuillez réessayer.';
        responseElement.style.color = 'red';
    }
}

// Fonction d'initialisation qui va lier les événements
function init() {
    const resetForm = document.getElementById('reset-form');
    resetForm.addEventListener('submit', handlePasswordReset);
}

// Initialisation de la page une fois le DOM chargé
document.addEventListener('DOMContentLoaded', init);
