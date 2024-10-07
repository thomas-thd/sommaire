const quizData = [
    {
        question: "Quelle est la définition des pourparlers dans le cadre d'un contrat ?",
        a: "Une obligation de conclure le contrat",
        b: "Une phase de négociation précédant le contrat",
        c: "Une rupture du contrat",
        correct: "b"
    },
    {
        question: "La rupture des pourparlers est-elle libre ?",
        a: "Non, elle n'est jamais permise",
        b: "Oui, mais uniquement avec une compensation financière",
        c: "Oui, à condition qu'elle soit de bonne foi",
        correct: "c"
    },
    {
        question: "Qu'est-ce qu'une promesse unilatérale de contrat ?",
        a: "Un engagement entre deux parties à signer un contrat",
        b: "Une personne s'engage à signer un contrat avec une autre",
        c: "Un contrat obligatoire pour les deux parties",
        correct: "b"
    },
    {
        question: "Quelle est la différence entre une promesse unilatérale et une promesse synallagmatique ?",
        a: "La promesse unilatérale engage une seule personne, la promesse synallagmatique engage les deux",
        b: "La promesse synallagmatique engage une seule personne",
        c: "Il n'y a aucune différence",
        correct: "a"
    },
    {
        question: "Quel est le principe de la liberté contractuelle ?",
        a: "Il n'est pas possible de choisir son cocontractant",
        b: "La liberté de contracter ou non, avec des exceptions prévues par la loi",
        c: "La loi impose toujours un contrat écrit",
        correct: "b"
    },
    {
        question: "Quels sont les trois vices du consentement ?",
        a: "Erreur, dol, contrat",
        b: "Dol, violence, erreur",
        c: "Erreur, consentement, obligation",
        correct: "b"
    },
    {
        question: "Qu'est-ce que le dol dans un contrat ?",
        a: "Un contrat sans clause",
        b: "Une manœuvre ou un mensonge provoquant une erreur chez l'autre partie",
        c: "Une erreur non intentionnelle",
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
        const userAnswer = userAnswers[index];
        const correction = document.createElement('p');
        correction.innerHTML = `Question ${index + 1}: ${data.question}<br>
        Votre réponse: ${data[userAnswer] || "Non répondue"}<br>
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
    
    if (answer) {
        userAnswers.push(answer);

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

loadQuiz();
