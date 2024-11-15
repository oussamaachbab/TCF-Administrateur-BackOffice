if (!localStorage.getItem('a1')) {
    alert("no data for level a1 to work on it");
}
if (!localStorage.getItem('a2')) {
    alert("no data for level a2 to work on it");
}
if (!localStorage.getItem('b1')) {
    alert("no data for level b1 to work on it");
}
if (!localStorage.getItem('b2')) {
    alert("no data for level b2 to work on it");
}
if (!localStorage.getItem('c1')) {
    alert("no data for level c1 to work on it");
}
if (!localStorage.getItem('c2')) {
    alert("no data for level c2 to work on it");
}

// Charger les données depuis localStorage
const a1 = JSON.parse(localStorage.getItem('a1'));
const a2 = JSON.parse(localStorage.getItem('a2'));
const b1 = JSON.parse(localStorage.getItem('b1'));
const b2 = JSON.parse(localStorage.getItem('b2'));
const c1 = JSON.parse(localStorage.getItem('c1'));
const c2 = JSON.parse(localStorage.getItem('c2'));

// Fonction pour sauvegarder les données dans localStorage après chaque modification
function saveQuestionsData() {
    localStorage.setItem(level, JSON.stringify(levelchange));
}
// function saveQuestionsData(level) {
//     let levelchange;
//     switch (level) {
//         case 'a1': 
//         levelchange = a1;
//             break;
//         case 'a2':
//             levelchange = a2;
//             break;
//         case 'b1':
//             levelchange = b1;
//             break;
//         case 'b2': 
//         levelchange = b2;
//             break;
//         case 'c1':
//             levelchange = c1;
//             break;
//         case 'c2':
//             levelchange = c2;
//             break;
//         default:
//             break;
//     }

//     localStorage.setItem(level, JSON.stringify(levelchange));
// }

function displayQuestions(category , nv) {
    let levelchange;
    switch (nv) {
        case 'a1': 
            levelchange = a1;
            break;
        case 'a2':
            levelchange = a2;
            break;
        case 'b1':
            levelchange = b1;
            break;
        case 'b2': 
            levelchange = b2;
            break;
        case 'c1':
            levelchange = c1;
            break;
        case 'c2':
            levelchange = c2;
            break;
        default:
            alert("Error: No Score Level Assigned");
            break;
    }
    // const container = document.getElementById('questions-container');
    const container = document.getElementById(nv);

    if (container.getAttribute('data-category') === category && container.style.maxHeight !== '0px') {
        container.style.maxHeight = '0';
        setTimeout(() => {
            container.style.display = 'none';
        }, 500);
    } else {
        container.style.display = 'block';
        container.setAttribute('data-category', category);
        container.innerHTML = ''; 

        const categoryTitle = document.createElement('h4');
        categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        container.appendChild(categoryTitle);

        // Ajouter les questions
        levelchange[category].forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.style.textAlign = 'center';
            questionDiv.classList.add('question-container');
            questionDiv.classList.add('question-container');

            const questionText = document.createElement('p');
            questionText.textContent = `${index + 1}. ${q.question}`;
            questionDiv.appendChild(questionText);

            q.answers.forEach(answer => {
                const answerText = document.createElement('p');
                answerText.textContent = answer;
                if (answer === q.correct) {
                    answerText.style.color = 'green';
                    answerText.style.fontWeight = 'bold';
                }
                questionDiv.appendChild(answerText);
            });

            const editIcon = document.createElement('span');
            editIcon.textContent = '✏️';
            editIcon.style.cursor = 'pointer';
            editIcon.style.marginRight = '10px';
            editIcon.onclick = () => editQuestion(category, index);
            questionDiv.appendChild(editIcon);

            const deleteIcon = document.createElement('span');
            deleteIcon.textContent = '🗑️';
            deleteIcon.style.cursor = 'pointer';
            deleteIcon.onclick = () => deleteQuestion(category, index);
            questionDiv.appendChild(deleteIcon);

            container.appendChild(questionDiv);
        });

      

        // Ajouter le bouton "Ajouter une question" pour la catégorie en cours
        const addButton = document.createElement('button');
        addButton.textContent = `Ajouter une question (${category})`;
        addButton.classList.add('btn', 'btn-outline-primary', 'mt-3');
        addButton.onclick = () => addQuestion(category);
        container.appendChild(addButton);

        setTimeout(() => {
            container.style.maxHeight = container.scrollHeight + 'px';
        }, 400);
    }
}

//fonction de modification
function editQuestion(category, index) {
    // Récupérer la question à modifier
    const questionData = a1[category][index];
    
    //création de formulaire de modification
    const formulaire = `
        <div id="formulaire-container" style="padding: 20px; background: #fff; border: 1px solid; border-radius: 5px; margin: 100px;">
            <h3>Modifier la question ${index + 1}</h3>
            <label for="question-text">Question :</label>
            <input type="text" id="question-text" value="${questionData.question}" style="width: 100%; margin-bottom: 10px;" />
            
            <label for="answer1">Réponse 1 :</label>
            <input type="text" id="answer1" value="${questionData.answers[0]}" style="width: 100%; margin-bottom: 10px;" />
            
            <label for="answer2">Réponse 2 :</label>
            <input type="text" id="answer2" value="${questionData.answers[1]}" style="width: 100%; margin-bottom: 10px;" />
            
            <label for="answer3">Réponse 3 :</label>
            <input type="text" id="answer3" value="${questionData.answers[2]}" style="width: 100%; margin-bottom: 10px;" />
            
            <label for="answer4">Réponse 4 :</label>
            <input type="text" id="answer4" value="${questionData.answers[3]}" style="width: 100%; margin-bottom: 10px;" />
            
            <label for="correct-answer">Réponse correcte :</label>
            <input type="text" id="correct-answer" value="${questionData.correct}" style="width: 100%; margin-bottom: 10px;" />
            
            <button id="save-edit-btn">Sauvegarder</button>
            <button id="cancel-edit-btn" style="margin-left: 10px;">Annuler</button>
        </div>
    `;

    //afficher le formulaire dans une modal
    const modalContainer = document.createElement('div');
    modalContainer.id = 'modal-container';
    modalContainer.style.position = 'fixed';
    modalContainer.style.top = '0';
    modalContainer.style.left = '0';
    modalContainer.style.width = '100vw';
    modalContainer.style.height = '100vh';
    modalContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    modalContainer.style.display = 'flex';
    modalContainer.style.alignItems = 'center';
    modalContainer.style.justifyContent = 'center';
    modalContainer.innerHTML = formulaire;
    document.body.appendChild(modalContainer);

    //sauvegarder les modifications
    document.getElementById('save-edit-btn').addEventListener('click', () => {
        const newQuestion = document.getElementById('question-text').value;
        const newAnswers = [
            document.getElementById('answer1').value,
            document.getElementById('answer2').value,
            document.getElementById('answer3').value,
            document.getElementById('answer4').value
        ];
        const newCorrectAnswer = document.getElementById('correct-answer').value;

        //mettre à jour les données de la question
        a1[category][index] = {
            question: newQuestion,
            answers: newAnswers,
            correct: newCorrectAnswer
        };

        //enregistrer les données mises à jour dans localStorage
        saveQuestionsData();

        // Fermer le formulaire de modification
        document.body.removeChild(modalContainer);

        //rafraichir l'affichage des questions
        displayQuestions(category);
    });

    //ajouter l'événement pour annuler l'édition
    document.getElementById('cancel-edit-btn').addEventListener('click', () => {
        //fermer la modal sans enregistrer
        document.body.removeChild(modalContainer);
    });
}

function addQuestion(category) {
    // Création du formulaire pour ajouter une nouvelle question
    const formulaireAjout = `
        <div id="formulaire-ajout-container" style="padding: 20px; background: #fff; border: 1px solid; border-radius: 5px; margin: 100px;">
            <h3>Ajouter une nouvelle question à la catégorie ${category}</h3>
            <label for="new-question">Question :</label>
            <input type="text" id="new-question" style="width: 100%; margin-bottom: 10px;" />

            <label for="new-answer1">Réponse 1 :</label>
            <input type="text" id="new-answer1" style="width: 100%; margin-bottom: 10px;" />

            <label for="new-answer2">Réponse 2 :</label>
            <input type="text" id="new-answer2" style="width: 100%; margin-bottom: 10px;" />

            <label for="new-answer3">Réponse 3 :</label>
            <input type="text" id="new-answer3" style="width: 100%; margin-bottom: 10px;" />

            <label for="new-answer4">Réponse 4 :</label>
            <input type="text" id="new-answer4" style="width: 100%; margin-bottom: 10px;" />

            <label for="new-correct-answer">Réponse correcte :</label>
            <input type="text" id="new-correct-answer" style="width: 100%; margin-bottom: 10px;" />

            <button id="save-new-question-btn">Ajouter</button>
            <button id="cancel-new-question-btn" style="margin-left: 10px;">Annuler</button>
        </div>
    `;

    // Afficher le formulaire dans une modal
    const modalContainer = document.createElement('div');
    modalContainer.id = 'modal-container';
    modalContainer.style.position = 'fixed';
    modalContainer.style.top = '0';
    modalContainer.style.left = '0';
    modalContainer.style.width = '100vw';
    modalContainer.style.height = '100vh';
    modalContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    modalContainer.style.display = 'flex';
    modalContainer.style.alignItems = 'center';
    modalContainer.style.justifyContent = 'center';
    modalContainer.innerHTML = formulaireAjout;
    document.body.appendChild(modalContainer);

    // Sauvegarder la nouvelle question
    document.getElementById('save-new-question-btn').addEventListener('click', () => {
        const newQuestionText = document.getElementById('new-question').value;
        const newAnswers = [
            document.getElementById('new-answer1').value,
            document.getElementById('new-answer2').value,
            document.getElementById('new-answer3').value,
            document.getElementById('new-answer4').value
        ];
        const newCorrectAnswer = document.getElementById('new-correct-answer').value;

        // Ajouter la nouvelle question dans la catégorie
        a1[category].push({
            question: newQuestionText,
            answers: newAnswers,
            correct: newCorrectAnswer
        });

        // Enregistrer les données mises à jour dans localStorage
        saveQuestionsData();

        // Fermer le formulaire
        document.body.removeChild(modalContainer);

        // Rafraîchir l'affichage des questions
        displayQuestions(category);
    });

    // Annuler l'ajout de question
    document.getElementById('cancel-new-question-btn').addEventListener('click', () => {
        document.body.removeChild(modalContainer);
    });
}

 //fonction de suppression
 function deleteQuestion(category, index) {
     if (confirm('Voulez-vous vraiment supprimer cette question ?')) {
         a1[category].splice(index, 1); 
         saveQuestionsData();
         displayQuestions(category);
     }
 }
 
 console.log("dashboard.js chargé, displayQuestions définie :", typeof displayQuestions);