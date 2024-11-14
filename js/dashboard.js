// Données des questions
const defaultQuestionsData = {
    grammar: [
      { question: "Quel est le verbe auxiliaire dans la phrase 'Il est allé' ?", answers: ["avoir", "être", "faire", "aller"], correct: "être" },
      { question: "Quel pronom personnel convient : ___ est mon frère.", answers: ["Il", "Elle", "Ils", "Nous"], correct: "Il" },
      { question: "Choisissez la bonne conjugaison pour 'je (avoir)':", answers: ["a", "as", "ai", "avez"], correct: "ai" },
      { question: "Quel mot complète la phrase : 'Nous ___ à la bibliothèque.' ?", answers: ["va", "allons", "allez", "alle"], correct: "allons" },
      { question: "Choisissez le mot correct pour : 'Tu ___ là-bas.'", answers: ["es", "est", "êtes", "sommes"], correct: "es" },
      { question: "Complétez avec la forme correcte : 'Il ___ deux chiens.'", answers: ["a", "ont", "as", "avez"], correct: "a" },
      { question: "Choisissez le verbe correct : 'Elle ___ à la maison.'", answers: ["vient", "venons", "viens", "venir"], correct: "vient" },
      { question: "Quel est l'adjectif correct pour 'fille' ?", answers: ["grand", "grande", "grands", "grandes"], correct: "grande" },
      { question: "Quelle est la négation de 'Je parle' ?", answers: ["Je ne parle pas", "Je parle pas", "Je n'ai pas parle", "Je parles pas"], correct: "Je ne parle pas" },
      { question: "Complétez la phrase : 'Vous ___ prêts.'", answers: ["est", "êtes", "sont", "sommes"], correct: "êtes" }
    ],
    vocabulary: [
      { question: "Quel mot est synonyme de 'rapide' ?", answers: ["lent", "vite", "lourd", "léger"], correct: "vite" },
      { question: "Quel est l'opposé de 'grand' ?", answers: ["petit", "court", "mince", "étroit"], correct: "petit" },
      { question: "Choisissez la traduction de 'happy':", answers: ["triste", "heureux", "jeune", "beau"], correct: "heureux" },
      { question: "Quel mot décrit une personne qui aime parler ?", answers: ["silencieux", "bavard", "timide", "patient"], correct: "bavard" },
      { question: "Quel est l'équivalent de 'beautiful' ?", answers: ["joli", "beau", "laid", "sombre"], correct: "beau" },
      { question: "Quel mot convient pour dire 'a lot' en français ?", answers: ["peu", "beaucoup", "seulement", "rarement"], correct: "beaucoup" },
      { question: "Quelle est la traduction de 'to run' ?", answers: ["courir", "marcher", "dormir", "sauter"], correct: "courir" },
      { question: "Quel mot signifie 'happy' en français ?", answers: ["content", "fâché", "triste", "effrayé"], correct: "content" },
      { question: "Quel est le contraire de 'jeune' ?", answers: ["vieux", "neuf", "nouveau", "rapide"], correct: "vieux" },
      { question: "Quel mot est synonyme de 'fort' ?", answers: ["faible", "solide", "jeune", "vieux"], correct: "solide" }
    ],
    comprehension: [
      { question: "Dans le texte, qui est le personnage principal ?", answers: ["Marie", "Jean", "Paul", "Sarah"], correct: "Marie" },
      { question: "Quel est le thème principal du passage ?", answers: ["Famille", "Éducation", "Travail", "Santé"], correct: "Éducation" },
      { question: "Quelle est la première action que fait le personnage ?", answers: ["Il mange", "Il dort", "Il lit", "Il marche"], correct: "Il lit" },
      { question: "Dans quel lieu se passe l'histoire ?", answers: ["école", "maison", "bureau", "parc"], correct: "école" },
      { question: "Quel est l'objectif principal du personnage ?", answers: ["Réussir un examen", "Gagner de l'argent", "Rencontrer un ami", "Faire du sport"], correct: "Réussir un examen" },
      { question: "Qui accompagne le personnage dans l'histoire ?", answers: ["Un ami", "Sa famille", "Personne", "Un professeur"], correct: "Un professeur" },
      { question: "Quel problème rencontre le personnage ?", answers: ["Un devoir difficile", "Un manque de temps", "Une maladie", "Une dispute"], correct: "Un devoir difficile" },
      { question: "Pourquoi le personnage se rend-il à cet endroit ?", answers: ["Étudier", "Travailler", "Dormir", "Manger"], correct: "Étudier" },
      { question: "Que pense le personnage de l'école ?", answers: ["Il aime", "Il déteste", "Il est neutre", "Il est indifférent"], correct: "Il aime" },
      { question: "Quelle est la résolution de l'histoire ?", answers: ["Il réussit son examen", "Il échoue", "Il abandonne", "Il part"], correct: "Il réussit son examen" }
    ]
  };
  if (!localStorage.getItem('questionsData')) {
    localStorage.setItem('questionsData', JSON.stringify(defaultQuestionsData));
}

// Charger les données depuis localStorage
const a1 = JSON.parse(localStorage.getItem('questionsData'));

// Fonction pour sauvegarder les données dans localStorage après chaque modification
function saveQuestionsData() {
    localStorage.setItem('questionsData', JSON.stringify(a1));
}


// afficher les questions en fonction de la catégorie
function displayQuestions(category) {
    const container = document.getElementById('questions-container');

    if (container.getAttribute('data-category') === category && container.style.maxHeight !== '0px') {
        container.style.maxHeight = '0';
        setTimeout(() => {
            container.style.display = 'none';
        }, 500);
    } else {

        container.style.display = 'block'; 
        container.setAttribute('data-category', category); // Définir la catégorie actuelle
        container.innerHTML = ''; // Réinitialiser le contenu du conteneur

        const categoryTitle = document.createElement('h4');
        categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        container.appendChild(categoryTitle);

        // Ajouter les questions
        a1[category].forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.style.textAlign = 'center';

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
        
        //bouton pour ajouter une question
        const addButton = document.createElement('button');
        addButton.textContent = `Ajouter une question (${category})`;
        //addButton.classList.add('btn', 'btn-outline-primary', 'mt-3','mb-3');
        addButton.style.backgroundColor = "blue";
        addButton.style.color = "white";
        addButton.style.borderRadius = "5px";
        addButton.style.float="right";
        addButton.onclick = () => addQuestion(category);
        container.appendChild(addButton);
        //réajuster la hauteur
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