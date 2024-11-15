const quizData = [
    {
        question: "Qu'est-ce qu'un marché dans l'économie ?",
        a: "Un lieu de rencontre entre offre et demande",
        b: "Une entreprise privée",
        c: "Une organisation gouvernementale",
        correct: "a"
    },
    {
        question: "Quel type de marché permet l'échange de biens et services ?",
        a: "Le marché du travail",
        b: "Le marché des capitaux",
        c: "Le marché des biens et services",
        correct: "c"
    },
    {
        question: "Qu'est-ce qu'un marché concurrentiel ?",
        a: "Quand l'État fixe les prix",
        b: "Quand l'offre et la demande sont libres de se confronter",
        c: "Quand les entreprises coopèrent",
        correct: "b"
    },
    {
        question: "Qu'est-ce qu'une externalité négative ?",
        a: "Une activité qui dégrade le bien-être d'autres agents économiques",
        b: "Une augmentation des bénéfices d'une entreprise",
        c: "Une stratégie de coopération entre entreprises",
        correct: "a"
    },
    {
        question: "Qu'est-ce que l'asymétrie d'information ?",
        a: "Quand certains agents ont plus d'informations que d'autres",
        b: "Quand tous les agents ont les mêmes informations",
        c: "Quand l'information est inutilisable",
        correct: "a"
    },
    {
        question: "Quel est le rôle des prix sur un marché ?",
        a: "Agir comme signal pour les agents économiques",
        b: "Fixer les salaires",
        c: "Établir des normes",
        correct: "a"
    },
    {
        question: "Que désigne le terme 'atomicité du marché' ?",
        a: "Un marché où un seul agent contrôle tout",
        b: "Un marché avec de nombreux offreurs et demandeurs",
        c: "Un marché où les prix sont fixés par l'État",
        correct: "b"
    },
    {
        question: "Quelle est la fonction première du marché ?",
        a: "Offrir des subventions",
        b: "Permettre la rencontre de l'offre et de la demande pour fixer un prix",
        c: "Permettre à l'État de fixer les prix",
        correct: "b"
    },
    {
        question: "Que sont les barrières à l'entrée naturelles ?",
        a: "Des obstacles légaux empêchant de créer une entreprise",
        b: "Des caractéristiques du marché rendant l'entrée difficile",
        c: "Une manipulation des entreprises pour empêcher la concurrence",
        correct: "b"
    },
    {
        question: "Qu'est-ce qu'un marché des capitaux ?",
        a: "Échange de biens matériels",
        b: "Échange entre ceux qui ont de l'épargne et ceux qui veulent emprunter",
        c: "Échange d'informations",
        correct: "b"
    },
    {
        question: "Quelles sont les conséquences d'une externalité positive ?",
        a: "Amélioration du bien-être des autres agents économiques",
        b: "Baisse de la production",
        c: "Aucune conséquence",
        correct: "a"
    },
    {
        question: "Quel type de marché est caractérisé par une offre et une demande parfaitement élastiques ?",
        a: "Marché concurrentiel",
        b: "Monopole",
        c: "Oligopole",
        correct: "a"
    },
    {
        question: "Quel type de marché est basé sur l'échange de force de travail ?",
        a: "Le marché du travail",
        b: "Le marché des biens",
        c: "Le marché des capitaux",
        correct: "a"
    },
    {
        question: "Quel est l'impact des externalités négatives sur le bien-être ?",
        a: "Elles l'améliorent",
        b: "Elles ne l'affectent pas",
        c: "Elles le dégradent",
        correct: "c"
    },
    {
        question: "Quelle est la relation entre le prix et la demande ?",
        a: "La demande diminue quand le prix augmente",
        b: "La demande est constante quel que soit le prix",
        c: "La demande augmente quand le prix augmente",
        correct: "a"
    }
];

let currentQuestion = 0;
let score = 0;
let userAnswers = [];

const quiz = document.getElementById("quiz");
const submitBtn = document.getElementById("submit");
const resultatEl = document.getElementById("resultat");
const correctionsEl = document.getElementById("corrections");

function shuffleAnswers(data) {
    const answers = [data.a, data.b, data.c];
    // Mélange les réponses
    answers.sort(() => Math.random() - 0.5);
    return answers;
}

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    const shuffledAnswers = shuffleAnswers(currentQuizData);

    // Trouver la position de la bonne réponse parmi les réponses mélangées
    const correctAnswer = shuffledAnswers.indexOf(currentQuizData[currentQuizData.correct]);

    quiz.innerHTML = `
        <div>
            <h3>${currentQuizData.question}</h3>
            <label><input type="radio" name="answer" value="a"> ${shuffledAnswers[0]}</label><br>
            <label><input type="radio" name="answer" value="b"> ${shuffledAnswers[1]}</label><br>
            <label><input type="radio" name="answer" value="c"> ${shuffledAnswers[2]}</label><br>
        </div>
    `;
    return correctAnswer;
}

function getSelectedAnswer() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let answer = undefined;
    answers.forEach((input) => {
        if (input.checked) {
            answer = input.value;
        }
    });
    return answer;
}

function showCorrections() {
    correctionsEl.innerHTML = "<h3>Corrections :</h3>";
    quizData.forEach((data, index) => {
        const userAnswer = userAnswers[index] || "Non répondue";
        correctionsEl.innerHTML += `
            <p>
                <strong>Question ${index + 1}:</strong> ${data.question}<br>
                <em>Votre réponse:</em> ${userAnswer === "Non répondue" ? userAnswer : data[userAnswer]}<br>
                <em>Bonne réponse:</em> ${data[data.correct]}
            </p>
        `;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelectedAnswer();
    if (!answer) {
        alert("Veuillez sélectionner une réponse !");
        return;
    }

    const currentQuizData = quizData[currentQuestion];
    const correctAnswer = loadQuiz();  // Charger la question suivante et obtenir l'index de la bonne réponse

    if (answer === ['a', 'b', 'c'][correctAnswer]) {
        score++;
    }

    userAnswers.push(answer);

    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = "";
        resultatEl.innerHTML = `Votre score : ${score}/${quizData.length}`;
        showCorrections();
        submitBtn.style.display = "none";
    }
});

// Charger la première question
loadQuiz();
