const quizQuestions = [
    {
        question: "Quel protocole sécurise les connexions web ?",
        answers: ["HTTPS", "HTTP", "FTP", "SMTP"]
    },
    {
        question: "Quel signe indique une connexion sécurisée ?",
        answers: ["Un cadenas vert", "Une étoile", "Un cadenas rouge", "Un point d'exclamation"]
    },
    {
        question: "Quelle pratique consiste à usurper un site en changeant l'URL ?",
        answers: ["Typosquatting", "Phishing", "Cryptojacking", "Ransomware"]
    },
    {
        question: "Qu'est-ce qu'une tentative de phishing ?",
        answers: ["Une escroquerie incitant à révéler des infos", "Un malware qui chiffre les données", "Une attaque DDoS", "Un virus infectant le système"]
    },
    {
        question: "Que faire pour prévenir une attaque ransomware ?",
        answers: ["Mettre à jour les logiciels", "Ignorer les alertes de sécurité", "Ne jamais faire de sauvegardes", "Partager son mot de passe"]
    },
    {
        question: "Quel type de mot de passe est recommandé pour la sécurité ?",
        answers: ["Un mot de passe long et complexe", "Un mot de passe court", "Un mot de passe qui contient uniquement des lettres", "Un mot de passe simple"]
    },
    {
        question: "Qu'est-ce qu'un pare-feu ?",
        answers: ["Un outil de sécurité réseau", "Un logiciel de sauvegarde", "Un programme de navigation", "Un outil de développement"]
    },
    {
        question: "Pourquoi faut-il mettre à jour ses logiciels régulièrement ?",
        answers: ["Pour corriger les failles de sécurité", "Pour avoir plus de fonctionnalités", "Pour économiser de l'espace", "Pour rendre l'ordinateur plus rapide"]
    },
    {
        question: "Qu'est-ce qu'un antivirus ?",
        answers: ["Un logiciel de protection contre les malwares", "Un type de malware", "Un outil de sauvegarde", "Un système d'exploitation"]
    },
    {
        question: "Que signifie l'acronyme VPN ?",
        answers: ["Virtual Private Network", "Very Protected Network", "Visual Private Network", "Virtual Proxy Network"]
    },
    {
        question: "Quelle est la meilleure façon de vérifier qu'un email est légitime ?",
        answers: ["Vérifier l'adresse de l'expéditeur", "Cliquer sur les liens", "Ouvrir les pièces jointes", "Ignorer l'email"]
    },
    {
        question: "Quelle est la principale fonction du chiffrement ?",
        answers: ["Protéger la confidentialité des données", "Améliorer les performances réseau", "Compresser les fichiers", "Supprimer les virus"]
    },
    {
        question: "Comment se protéger contre le typosquatting ?",
        answers: ["En sauvegardant les sites dans les favoris", "En tapant l'adresse URL à chaque visite", "En utilisant des sites inconnus", "En désactivant HTTPS"]
    },
    {
        question: "Que doit-on faire si on reçoit un message suspect demandant des informations sensibles ?",
        answers: ["Ne pas répondre et signaler le message", "Fournir les informations demandées", "Transférer le message à ses contacts", "Supprimer immédiatement le message"]
    },
    {
        question: "Quelle est la première action à faire après une attaque ransomware ?",
        answers: ["Déconnecter le système du réseau", "Éteindre l'ordinateur", "Rechercher une solution antivirus", "Ignorer l'attaque"]
    }
];

const correctAnswers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const scoreElement = document.getElementById("score");

function shuffleAnswers(answers) {
    const shuffledAnswers = [...answers];
    for (let i = shuffledAnswers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
    }
    return shuffledAnswers;
}

function loadQuestion() {
    resetState();
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    // Mélanger les réponses
    const shuffledAnswers = shuffleAnswers(currentQuestion.answers);
    shuffledAnswers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("answer-btn");
        button.addEventListener("click", () => selectAnswer(index, shuffledAnswers));
        answersElement.appendChild(button);
    });
}

function resetState() {
    answersElement.innerHTML = "";
}

function selectAnswer(index, shuffledAnswers) {
    const correctAnswerIndex = quizQuestions[currentQuestionIndex].answers.indexOf(shuffledAnswers[correctAnswers[currentQuestionIndex]]);
    if (index === correctAnswerIndex) {
        score++;
    }
    goToNextQuestion();
}

function goToNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    questionElement.style.display = "none";
    answersElement.style.display = "none";
    scoreElement.textContent = `Score final : ${score} / ${quizQuestions.length}`;
}

loadQuestion();
