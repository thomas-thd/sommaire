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
        a: "Quand tous les agents ont les mêmes informations",
        b: "Quand certains agents ont plus d'informations que d'autres",
        c: "Quand l'information est inutilisable",
        correct: "b"
    },
    {
        question: "Quelle est la fonction première du marché ?",
        a: "Permettre à l'État de fixer les prix",
        b: "Permettre la rencontre de l'offre et de la demande pour fixer un prix",
        c: "Offrir des subventions",
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
        question: "Quelles sont les conséquences d'une externalité positive ?",
        a: "Amélioration du bien-être des autres agents économiques",
        b: "Baisse de la production",
        c: "Aucune conséquence",
        correct: "a"
    },
    {
        question: "Quelle est la relation entre le prix et la demande ?",
        a: "La demande est constante quel que soit le prix",
        b: "La demande augmente quand le prix augmente",
        c: "La demande diminue quand le prix augmente",
        correct: "c"
    },
    {
        question: "Qu'est-ce qu'un marché des capitaux ?",
        a: "Échange de biens matériels",
        b: "Échange d'informations",
        c: "Échange entre ceux qui ont de l'épargne et ceux qui veulent emprunter",
        correct: "c"
    },
    {
        question: "Comment l'État intervient-il sur le marché ?",
        a: "En fixant les salaires",
        b: "En réglementant certains secteurs",
        c: "En empêchant toute concurrence",
        correct: "b"
    },
    {
        question: "Qu'est-ce que la transparence de l'information sur un marché ?",
        a: "Les agents ont accès à des informations identiques",
        b: "Les informations sont secrètes",
        c: "L'État contrôle toutes les informations",
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
        question: "Quel est le rôle des prix sur un marché ?",
        a: "Fixer les salaires",
        b: "Agir comme signal pour les agents économiques",
        c: "Établir des normes",
        correct: "b"
    },
    {
        question: "Que sont les barrières à l'entrée artificielles ?",
        a: "Des obstacles naturels à l'entrée sur le marché",
        b: "Des stratégies d'entreprises pour limiter la concurrence",
        c: "Des aides gouvernementales",
        correct: "b"
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
        question: "Qu'est-ce que le marché des biens et services ?",
        a: "Un marché où se rencontrent les demandeurs de travail",
        b: "Un marché où se rencontrent les offreurs et demandeurs de biens et services",
        c: "Un marché pour les transactions financières",
        correct: "b"
    },
    {
        question: "Quel type de marché est caractérisé par une offre et une demande parfaitement élastiques ?",
        a: "Marché concurrentiel",
        b: "Monopole",
        c: "Oligopole",
        correct: "a"
    },
    {
        question: "Quelles stratégies de coopération sont autorisées sur le marché ?",
        a: "Celles qui nuisent à la concurrence",
        b: "Celles qui ne nuisent pas au marché",
        c: "Celles qui sont contrôlées par l'État",
        correct: "b"
    },
    {
        question: "Quel est le principal problème lié à l'asymétrie d'information ?",
        a: "Les agents ont trop d'informations",
        b: "Certains agents peuvent tirer un avantage injuste",
        c: "Il n'y a pas de problème",
        correct: "b"
    }
];

const quiz = document.getElementById("quiz");
const submitBtn = document.getElementById("submit");
const resultatEl = document.getElementById("resultat");
const correctionsEl = document.getElementById("corrections");

let score = 0;
let currentQuestion = 0;
let userAnswers = [];

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    quiz.innerHTML = `
        <div class="question">
            <h3>${currentQuizData.question}</h3>
            <label><input type="radio" name="answer" value="a"> ${currentQuizData.a}</label>
            <label><input type="radio" name="answer" value="b"> ${currentQuizData.b}</label>
            <label><input type="radio" name="answer" value="c"> ${currentQuizData.c}</label>
        </div>
    `;
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
        const correction = document.createElement('p');
        correction.innerHTML = `Question ${index + 1}: ${data.question}<br>
        Votre réponse: ${userAnswer === "Non répondue" ? userAnswer : data[userAnswer]}<br>
        Bonne réponse: ${data[data.correct]}<br>`;
        correction.style.color = userAnswer === data.correct ? 'green' : 'red';
        correctionsEl.appendChild(correction);
    });
}

function displayNote() {
    let note = "";
    const percentage = (score / quizData.length) * 100;
    const noteSur10 = Math.round((score / quizData.length) * 10);

    if (percentage === 100) {
        note = "Excellent ! Vous avez tout bon !";
    } else if (percentage >= 80) {
        note = "Très bien ! Vous avez une bonne maîtrise du sujet.";
    } else if (percentage >= 60) {
        note = "Bien, mais il y a encore des points à revoir.";
    } else if (percentage >= 40) {
        note = "Passable, il est nécessaire de revoir certaines notions.";
    } else {
        note = "Insuffisant, il est recommandé de réviser le chapitre.";
    }

    const noteEl = document.createElement("p");
    noteEl.innerHTML = `Note : ${noteSur10}/10<br>${note}`;
    resultatEl.appendChild(noteEl);
}

submitBtn.addEventListener("click", () => {
    const answer = getSelectedAnswer();
    
    userAnswers.push(answer); // Stockez la réponse de l'utilisateur même si elle est `undefined`

    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;
        
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = "";
            resultatEl.innerHTML = `Votre score est ${score}/${quizData.length}`;
            submitBtn.style.display = "none";
            showCorrections();
            displayNote();  // Affiche la note finale sur 10 et un commentaire
        }
    } else {
        alert("Veuillez sélectionner une réponse !");
    }
});

// Initialiser le quiz
loadQuiz();
