//regrouper les niveaux dans un seul objet
const levels={ 
    a1: JSON.parse(localStorage.getItem('a1'))||{}, 
    a2: JSON.parse(localStorage.getItem('a2'))||{}, 
    b1: JSON.parse(localStorage.getItem('b1'))||{}, 
    b2: JSON.parse(localStorage.getItem('b2'))||{}, 
    c1: JSON.parse(localStorage.getItem('c1'))||{}, 
    c2: JSON.parse(localStorage.getItem('c2'))||{} 
};

//===================================//
function saveQuestionsData(level){
    if (levels[level]) {
        localStorage.setItem(level, JSON.stringify(levels[level]));
    }
}

//===================================//
function displayQuestions(category, level){
    const currentLevelData=levels[level];
    if(!currentLevelData){
        alert(`Données introuvables pour le niveau ${level}`);
        return;
    }

    const container=document.getElementById(level);
    if(!container){
        alert(`Conteneur introuvable pour le niveau ${level}`);
        return;
    }

    //vérifiez si le conteneur est déjà affiché pour cette catégorie
    const isActive = container.classList.contains('active') && container.getAttribute('data-category')===category;

    //masquez toutes les autres catégories
    document.querySelectorAll('.questions-container').forEach(cont =>{
        cont.classList.remove('active');
        cont.style.display = 'none';
    });

    if(isActive){
        //masquer si déjà actif
        container.classList.remove('active');
        container.style.display='none';
    }else{
        //afficher les questions de la catégorie sélectionnée
        container.style.display='block';
        container.classList.add('active');
        container.setAttribute('data-category',category);
        container.innerHTML = ''; //réinitialiser le contenu

        //ajoutez les questions
        (currentLevelData[category]|| []).forEach((q,index)=>{
            const questionDiv = document.createElement('div');
            questionDiv.style.border='2px solid #007bff';
            questionDiv.style.padding='10px';
            questionDiv.style.borderRadius='5px';
            questionDiv.style.marginBottom='10px';
            questionDiv.style.background='#fff';
            questionDiv.style.textAlign='center';
            questionDiv.classList.add('question-container');

            const questionText=document.createElement('p');
            questionText.textContent=`${index + 1}. ${q.question}`;
            questionDiv.appendChild(questionText);

            q.answers.forEach(answer =>{
                const answerText =document.createElement('p');
                answerText.textContent =answer;
                if (answer===q.correct){
                    answerText.style.color='green';
                    answerText.style.fontWeight = 'bold';
                }
                questionDiv.appendChild(answerText);
            });

            const editIcon= document.createElement('span');
            editIcon.textContent = '✏️';
            editIcon.style.cursor = 'pointer';
            editIcon.onclick=()=>editQuestion(category, index,level);
            questionDiv.appendChild(editIcon);

            const deleteIcon =document.createElement('span');
            deleteIcon.textContent = '🗑️';
            deleteIcon.style.cursor = 'pointer';
            deleteIcon.onclick =()=>deleteQuestion(category,index,level);
            questionDiv.appendChild(deleteIcon);

            container.appendChild(questionDiv);
        });

        //le bouton pour ajouter des questions
        const addButton=document.createElement('button');
        addButton.textContent=`Ajouter une question (${category})`;
        addButton.style.display='inline-block';
        addButton.style.padding='10px 20px';
        addButton.style.marginBottom='20px';
        addButton.style.color='#fff';
        addButton.style.backgroundColor='red';
        addButton.style.border='none';
        addButton.style.borderRadius ='5px';
        addButton.style.cursor='pointer';
        addButton.onclick=()=>addQuestion(category, level);
        container.appendChild(addButton);
    }
}


//===================================//
function editQuestion(category,index,level){
    const questionData=levels[level][category][index];
    const formulaire=`
        <div id="formulaire-container" style="padding: 20px; background: #fff; border: 1px solid; border-radius: 5px; margin: 100px;">
            <h3>Modifier la question ${index + 1}</h3>
            <label>Question :</label>
            <input type="text" id="question-text" value="${questionData.question}" style="width: 100%; margin-bottom: 10px;" />
            
            <label>Réponse 1 :</label>
            <input type="text" id="answer1" value="${questionData.answers[0]}" style="width: 100%; margin-bottom: 10px;" />
            
            <label>Réponse 2 :</label>
            <input type="text" id="answer2" value="${questionData.answers[1]}" style="width: 100%; margin-bottom: 10px;" />
            
            <label>Réponse 3 :</label>
            <input type="text" id="answer3" value="${questionData.answers[2]}" style="width: 100%; margin-bottom: 10px;" />
            
            <label>Réponse 4 :</label>
            <input type="text" id="answer4" value="${questionData.answers[3]}" style="width: 100%; margin-bottom: 10px;" />
            
            <label>Réponse correcte :</label>
            <input type="text" id="correct-answer" value="${questionData.correct}" style="width: 100%; margin-bottom: 10px;" />
            
            <button id="save-edit-btn">Sauvegarder</button>
            <button id="cancel-edit-btn">Annuler</button>
        </div>
    `;

    //affichage du formulaire
    const modal=document.createElement('div');
    modal.id='modal-container';
    modal.style =`position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.5); display: flex; justify-content: center; align-items: center;`;
    modal.innerHTML=formulaire;
    document.body.appendChild(modal);

    document.getElementById('save-edit-btn').onclick=()=>{
        questionData.question=document.getElementById('question-text').value;
        questionData.answers=[
            document.getElementById('answer1').value,
            document.getElementById('answer2').value,
            document.getElementById('answer3').value,
            document.getElementById('answer4').value,
        ];
        questionData.correct=document.getElementById('correct-answer').value;
        saveQuestionsData(level);
        document.body.removeChild(modal);
        displayQuestions(category,level);
    };

    document.getElementById('cancel-edit-btn').onclick=()=>{
        document.body.removeChild(modal);
    };
}

//===================================//
function addQuestion(category, level){
    const formulaireAjout = `
        <div id="formulaire-ajout-container" style="padding: 20px; background: white; border: 1px solid; border-radius: 5px; margin: 100px;">
            <h3>Ajouter une nouvelle question</h3>
            <label for="new-question">Question :</label>
            <input id="new-question" type="text" style="width: 100%; margin-bottom: 10px;" />

            <label for="new-answer1">Réponse 1 :</label>
            <input id="new-answer1" type="text" style="width: 100%; margin-bottom: 10px;" />

            <label for="new-answer2">Réponse 2 :</label>
            <input id="new-answer2" type="text" style="width: 100%; margin-bottom: 10px;" />

            <label for="new-answer3">Réponse 3 :</label>
            <input id="new-answer3" type="text" style="width: 100%; margin-bottom: 10px;" />

            <label for="new-answer4">Réponse 4 :</label>
            <input id="new-answer4" type="text" style="width: 100%; margin-bottom: 10px;" />

            <label for="correct-answer">Réponse correcte :</label>
            <input id="correct-answer" type="text" style="width: 100%; margin-bottom: 10px;" />

            <button id="save-new-question-btn" class="btn btn-primary">Ajouter</button>
            <button id="cancel-new-question-btn" class="btn btn-secondary" style="margin-left: 10px;">Annuler</button>
        </div>
    `;

    //affichage du formulaire dans un modal
    const modalContainer=document.createElement('div');
    modalContainer.id='modal-container';
    modalContainer.style.position='fixed';
    modalContainer.style.top='0';
    modalContainer.style.left='0';
    modalContainer.style.width='100vw';
    modalContainer.style.height='100vh';
    modalContainer.style.backgroundColor='rgba(0, 0, 0, 0.5)';
    modalContainer.style.display='flex';
    modalContainer.style.alignItems='center';
    modalContainer.style.justifyContent='center';
    modalContainer.innerHTML=formulaireAjout;
    document.body.appendChild(modalContainer);

    //gestion de l'ajout de la question
    document.getElementById('save-new-question-btn').addEventListener('click',()=>{
        const newQuestionText=document.getElementById('new-question').value;
        const newAnswers=[
            document.getElementById('new-answer1').value,
            document.getElementById('new-answer2').value,
            document.getElementById('new-answer3').value,
            document.getElementById('new-answer4').value
        ];
        const newCorrectAnswer=document.getElementById('correct-answer').value;

        if (!newQuestionText||newAnswers.some(ans =>!ans)||!newCorrectAnswer){
            alert('Veuillez remplir tous les champs.');
            return;
        }

        //ajouter la nouvelle question dans la catégorie
        levels[level][category] = levels[level][category] || [];
        levels[level][category].push({
            question: newQuestionText,
            answers: newAnswers,
            correct: newCorrectAnswer
        });
        //sauvegarder dans localStorage
        saveQuestionsData(level);
        //fermer le formulaire
        document.body.removeChild(modalContainer);
        //rafraîchir l'affichage des questions
        displayQuestions(category, level);
    });

    //annuler l'ajout
    document.getElementById('cancel-new-question-btn').addEventListener('click',()=>{
        document.body.removeChild(modalContainer);
    });
}

//===================================//
function deleteQuestion(category, index,level){
    if (confirm('Voulez-vous vraiment supprimer cette question ?')){
        levels[level][category].splice(index,1);
        saveQuestionsData(level);
        displayQuestions(category,level);
    }
}

