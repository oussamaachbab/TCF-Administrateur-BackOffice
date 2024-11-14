function redirectToQuiz(level, category) {
    const params = new URLSearchParams(window.location.search);
    const username = params.get("userName");
    const storedUser = JSON.parse(localStorage.getItem(username));

    if (!storedUser) {
        alert("User not found. Please create an account first.");
        window.location.href = "userlog.html";
        return;
    }

    storedUser.category = category;
    storedUser.LivelScore = level;

    localStorage.setItem(username, JSON.stringify(storedUser));

    window.location.href = `userlevelquiz.html?userName=${storedUser.username}`;
}

function initializeQuizPage() {
    const params = new URLSearchParams(window.location.search);
    const username = params.get("userName");//contine just the user name value
    const storedUser = JSON.parse(localStorage.getItem(username));//contine all the object

    
    function loadQuizData(quizId) {
      const data = localStorage.getItem(quizId);
      return data ? JSON.parse(data) : null;
    }

    if (!username) {
        alert("Username is missing from the URL.");
        window.location.href = "userlog.html";
        return;
    }
    
    let livelScore = storedUser.LivelScore;
    let questionsArray;
    switch(livelScore){
        case 'a1':
            questionsArray = loadQuizData('a1');
            ;
            break;
        case 'a2':
            questionsArray = loadQuizData('a2');
            break;
        case 'b1':
            questionsArray = loadQuizData('b1');
            break;
        case 'b2':
            questionsArray = loadQuizData('b2');
            break;
        case 'c1':
            questionsArray = loadQuizData('c1');
            break;
        case 'c2':
            questionsArray = loadQuizData('c2');
            break;
        default:
            alert("Error: Invalid LivelScore");
            break;
    }
    let flixebleArray = questionsArray[storedUser.category];
    // console.log(flixebleArray);
    //********************************************************************************************************
    let currentQuestionIndex = 0;
    let score = 0;
    let timerInterval;
    let quizResponses = [];

    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const rand = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[rand]] = [arr[rand], arr[i]]; // Swap elements
        }
        return arr;
    }
    document.getElementById("start-button").addEventListener("click", function startQuiz() {
        shuffle(flixebleArray);
        document.getElementById("timer").style.display = "flex";
        document.getElementById("start-button").classList.add("hidden");
        document.getElementById("question-container").classList.remove("hidden");
        loadQuestion();
    });
    function startTimer() {
        let timeLeft = 30;
        document.getElementById('timer').textContent = `${timeLeft}s`;
    
        timerInterval = setInterval(() => {
            timeLeft--;
            document.getElementById('timer').textContent = `${timeLeft}s`;
    
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                document.querySelectorAll('#options button').forEach(button => button.disabled = true);
                highlightCorrectAnswer();
                quizResponses.push({
                    question: flixebleArray[currentQuestionIndex].question,
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
        const currentQuestion = flixebleArray[currentQuestionIndex];
        document.getElementById("question").textContent = currentQuestion.question;
        const optionsContainer = document.getElementById("options");
        optionsContainer.innerHTML = ""; 
        
        currentQuestion.answers.forEach(option => {
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
        if (currentQuestionIndex < flixebleArray.length) {
            loadQuestion();
            document.getElementById("next-button").classList.add("hidden");
        } else {
            endQuiz();
        }
    }
    function selectAnswer(answer, button) {
        const currentQuestion = flixebleArray[currentQuestionIndex];
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
            timeTaken: 10-timeTaken
        });
        document.getElementById("next-button").classList.remove("hidden");
    }
    
    function highlightCorrectAnswer() {
        document.querySelectorAll('#options button').forEach(button => {
            if (button.textContent === flixebleArray[currentQuestionIndex].correct) {
                button.classList.add('correct');
            }
        });
    }
    function endQuiz() {
        if(score === flixebleArray.length) {  // hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
            if (!storedUser.categorys) storedUser.categorys = {};
            storedUser.categorys[storedUser.category] = true;
            storedUser.score = score;
            storedUser.responses = quizResponses;
            localStorage.setItem(username, JSON.stringify(storedUser));
        }
    
        const scoreContainer = document.getElementById("sc");
        scoreContainer.innerHTML = `Votre score est de ${score} / ${flixebleArray.length}.`;
        document.getElementById("timer").style.display = "none";
        clearInterval(timerInterval);
        document.getElementById("question-container").classList.add("hidden");
        document.getElementById('retake-button').classList.remove('hidden');
    }
    

    document.getElementById("next-button").addEventListener('click', goToNextQuestion);
    document.getElementById("retake-button").addEventListener('click', retakeQuiz);

    function retakeQuiz() {
        window.location.href = "categories.html?userName="+storedUser.username;
    }
    //******************************************************************************** 
}
//mat9sich hna lta7t
if (window.location.pathname.includes("userlevelquiz.html")) {
    document.addEventListener("DOMContentLoaded", initializeQuizPage);
}
