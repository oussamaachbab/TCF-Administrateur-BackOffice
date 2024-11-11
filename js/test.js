
const questions = [
    {
        question: "Comment dit-on 'good morning' en francais ?",
        options: ["Bonsoir", "Bonjour", "Salut", "Merci"],
        correct: "Bonjour"
    },
    {
        question: "Quel mot en francais signifie 'thank you' ?",
        options: ["S'il vous plait", "Merci", "Excusez-moi", "De rien"],
        correct: "Merci"
    },
    {
        question: "Completez la phrase : 'Je ___ un livre.'",
        options: ["mange", "lis", "parle", "danse"],
        correct: "lis"
    },
    {
        question: "Comment dit-on 'see you soon' en francais ?",
        options: ["A demain", "Au revoir", "A bientot", "Bonne nuit"],
        correct: "A bientot"
    },
    {
        question: "Quel est le contraire de 'grand' en francais ?",
        options: ["Large", "Petit", "Mince", "Long"],
        correct: "Petit"
    },
    {
        question: "Completez la phrase : 'Il fait tres ___ aujourd'hui.' (parlant de la chaleur)",
        options: ["froid", "pluvieux", "chaud", "vent"],
        correct: "chaud"
    },
    {
        question: "Quel mot en francais signifie 'family' ?",
        options: ["Famille", "Amis", "Travail", "Maison"],
        correct: "Famille"
    },
    {
        question: "Quel verbe en francais signifie 'to eat' ?",
        options: ["Lire", "Danser", "Manger", "Ecrire"],
        correct: "Manger"
    },
    {
        question: "Comment dit-on 'I am a student' en francais ?",
        options: ["Je suis professeur", "Je suis etudiant", "Je suis medecin", "Je suis danseur"],
        correct: "Je suis etudiant"
    },
    {
        question: "Quel est l'infinitif du verbe 'vais' en francais ?",
        options: ["Partir", "Venir", "Aller", "Rester"],
        correct: "Aller"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let quizResponses = []; // Store user responses and time

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[rand]] = [arr[rand], arr[i]]; // Swap elements
    }
    return arr;
}

function startQuiz() {
    shuffle(questions);
    document.getElementById("timer").style.display = "flex";
    document.getElementById("start-button").classList.add("hidden");
    document.getElementById("question-container").classList.remove("hidden");
    loadQuestion();
}

function startTimer() {
    let timeLeft = 10;
    document.getElementById('timer').textContent = `${timeLeft}s`;

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = `${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.querySelectorAll('#options button').forEach(button => button.disabled = true);
            highlightCorrectAnswer();
            quizResponses.push({
                question: questions[currentQuestionIndex].question,
                userAnswer: "No response",
                isCorrect: false,
                timeTaken: "10s"
            });
            setTimeout(goToNextQuestion, 3000);
        }
    }, 1000);
}

function loadQuestion() {
    document.getElementById("timer").style.display = "flex";
    clearInterval(timerInterval);
    startTimer();
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = ""; // Clear previous options

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.disabled = false;
        button.addEventListener("click", () => {
            clearInterval(timerInterval);
            selectAnswer(option, button);
        });
        optionsContainer.appendChild(button);
    });
}

function goToNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.getElementById("next-button").classList.add("hidden");
    } else {
        endQuiz();
    }
}

function selectAnswer(answer, button) {
    const currentQuestion = questions[currentQuestionIndex];
    const timeTaken = document.getElementById("timer").textContent;
    document.querySelectorAll('#options button').forEach(button => button.disabled = true);
    const isCorrect = answer === currentQuestion.correct;

    if (isCorrect) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("incorrect");
        highlightCorrectAnswer();
    }
    quizResponses.push({
        question: currentQuestion.question,
        userAnswer: answer,
        isCorrect: isCorrect,
        timeTaken: timeTaken
    });
    document.getElementById("next-button").classList.remove("hidden");
}

function highlightCorrectAnswer() {
    document.querySelectorAll('#options button').forEach(button => {
        if (button.textContent === questions[currentQuestionIndex].correct) {
            button.classList.add('correct');
        }
    });
}

function endQuiz() {
    localStorage.setItem("LastCorrectScore", score);
    localStorage.setItem("LastLivelScore", levelScore(score));
    const scoreContainer = document.getElementById("sc");
    scoreContainer.classList.remove("hidden");
    scoreContainer.style.display = "block";
    scoreContainer.innerHTML = `Votre score est de ${score} / ${questions.length}, votre Niveau est : ${levelScore(score)}`;
    document.getElementById("timer").style.display = "none";
    clearInterval(timerInterval);
    document.getElementById("question-container").classList.add("hidden");
    document.getElementById('retake-button').classList.remove('hidden');
    
    generatePDF(); // Call function to create PDF
}

function levelScore(score) {
    if (score <= 2) return 'A1';
    if (score <= 4) return 'A2';
    if (score <= 6) return 'B1';
    if (score <= 8) return 'B2';
    if (score === 9) return 'C1';
    if (score === 10) return 'C2';
}

// Function to generate PDF
function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(14);
    doc.text(10, 10, 'Résultats du Quiz de Français');
    doc.text(10, 20, `Score: ${score} / ${questions.length} - Niveau: ${levelScore(score)}`);
    doc.text(10, 30, 'Détail des réponses:');

    quizResponses.forEach((response, index) => {
        const y = 40 + (index * 10);
        const resultText = `${index + 1}. ${response.question} - Réponse: ${response.userAnswer} - ${
            response.isCorrect ? "Correct" : "Incorrect"
        } - Temps: ${response.timeTaken}`;
        doc.text(10, y, resultText);
    });

    doc.save('quiz_resultats.pdf');
}

document.getElementById("next-button").addEventListener('click', goToNextQuestion);
document.getElementById("retake-button").addEventListener('click', retakeQuiz);

function retakeQuiz() {
    document.getElementById("sc").textContent = "Test de compréhension";
    currentQuestionIndex = 0;
    score = 0;
    quizResponses = [];
    document.getElementById('retake-button').classList.add('hidden');
    document.getElementById('question-container').classList.remove('hidden');
    document.getElementById('next-button').classList.add('hidden');
    loadQuestion();
}