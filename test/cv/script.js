// Fonction de vérification de la force de la réponse pour la question secrète
document.getElementById('recovery-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const questionId = document.getElementById('question').value;
    const userAnswer = document.getElementById('answer').value.trim();

    const strengthBar = document.getElementById('strength-bar');
    const strengthText = document.getElementById('strength-text');
    const responseStrength = document.getElementById('response-strength');

    // Calcul de la force de la réponse
    let strength = 0;
    if (userAnswer.length >= 6) strength += 1;
    if (/[A-Z]/.test(userAnswer)) strength += 1;
    if (/[0-9]/.test(userAnswer)) strength += 1;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(userAnswer)) strength += 1;

    // Affichage de la force de la réponse
    let color = '';
    let width = 0;
    switch (strength) {
        case 1:
            color = 'red';
            strengthText.textContent = 'Force de votre réponse : Faible';
            width = 25;
            break;
        case 2:
            color = 'orange';
            strengthText.textContent = 'Force de votre réponse : Moyenne';
            width = 50;
            break;
        case 3:
            color = 'yellow';
            strengthText.textContent = 'Force de votre réponse : Bonne';
            width = 75;
            break;
        case 4:
            color = 'green';
            strengthText.textContent = 'Force de votre réponse : Très bonne';
            width = 100;
            break;
        default:
            color = 'gray';
            strengthText.textContent = 'Force de votre réponse : Très faible';
            width = 0;
    }

    strengthBar.innerHTML = `<div style="width: ${width}% ; background-color: ${color}; height: 10px;"></div>`;
    responseStrength.style.display = 'block';
});

// Fonction de test de la force du mot de passe
document.getElementById('password-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const password = document.getElementById('password').value.trim();

    const passwordStrengthBar = document.getElementById('password-strength-bar');
    const passwordStrengthText = document.getElementById('password-strength-text');
    const passwordMessage = document.getElementById('password-message');
    const passwordStrength = document.getElementById('password-strength');

    // Calcul de la force du mot de passe
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 1;

    // Affichage de la force du mot de passe
    let color = '';
    let width = 0;
    switch (strength) {
        case 1:
            color = 'red';
            passwordStrengthText.textContent = 'Force de votre mot de passe : Faible';
            width = 25;
            break;
        case 2:
            color = 'orange';
            passwordStrengthText.textContent = 'Force de votre mot de passe : Moyenne';
            width = 50;
            break;
        case 3:
            color = 'yellow';
            passwordStrengthText.textContent = 'Force de votre mot de passe : Bonne';
            width = 75;
            break;
        case 4:
            color = 'green';
            passwordStrengthText.textContent = 'Force de votre mot de passe : Très bonne';
            width = 100;
            break;
        default:
            color = 'gray';
            passwordStrengthText.textContent = 'Force de votre mot de passe : Très faible';
            width = 0;
    }

    passwordStrengthBar.innerHTML = `<div style="width: ${width}% ; background-color: ${color}; height: 10px;"></div>`;
    passwordStrength.style.display = 'block';

    // Message final selon la force du mot de passe
    if (strength < 2) {
        passwordMessage.textContent = "Votre mot de passe est trop faible. Pensez à ajouter des caractères spéciaux, des chiffres et des majuscules.";
        passwordMessage.style.color = "red";
    } else {
        passwordMessage.textContent = "Votre mot de passe est suffisamment fort.";
        passwordMessage.style.color = "green";
    }
});

// Fonction pour générer un mot de passe sécurisé
function generatePassword(length = 12) {
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    
    const allChars = upperCase + lowerCase + numbers + specialChars;
    let password = '';
    
    // S'assurer que le mot de passe contienne au moins un caractère de chaque type
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];

    // Compléter le mot de passe jusqu'à la longueur désirée
    for (let i = password.length; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Mélanger les caractères pour une meilleure sécurité
    password = password.split('').sort(() => Math.random() - 0.5).join('');
    
    return password;
}

// Ajouter un événement pour générer un mot de passe
document.getElementById('generate-password').addEventListener('click', function() {
    const generatedPassword = generatePassword(12); // Longueur par défaut de 12 caractères
    document.getElementById('generated-password').value = generatedPassword;
});
