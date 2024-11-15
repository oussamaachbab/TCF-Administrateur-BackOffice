// Données des questions
const a1 = {
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



// Fonction pour afficher les questions en fonction de la catégorie sélectionnée
function displayQuestions(category) {
    const container = document.getElementById('questions-container');

    // Si la catégorie est déjà affichée, on la masque avec une animation
    if (container.getAttribute('data-category') === category && container.style.maxHeight !== '0px') {
        container.style.maxHeight = '0'; // Réduit la hauteur pour masquer l'élément
        setTimeout(() => {
            container.style.display = 'none'; // Cache après l'animation
        }, 500);
    } else {
        // Si la catégorie est masquée, on l'affiche avec une animation
        container.style.display = 'block'; // Rendre le conteneur visible avant l'animation
        container.setAttribute('data-category', category); // Définir la catégorie actuelle
        container.innerHTML = ''; // Réinitialiser le contenu du conteneur

        const categoryTitle = document.createElement('h4');
        categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        container.appendChild(categoryTitle);

        // Ajouter les questions
        a1[category].forEach((q, index) => {
            const questionDiv = document.createElement('div');
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

        // Réajuster la hauteur pour l'animation
        setTimeout(() => {
            container.style.maxHeight = container.scrollHeight + 'px'; // Ajuster la hauteur du conteneur
        }, 10); // Petite pause pour permettre l'application de la transition
    }
}


 
 // Fonction pour supprimer une question
 function deleteQuestion(category, index) {
     if (confirm('Voulez-vous vraiment supprimer cette question ?')) {
         a1[category].splice(index, 1); // Supprimer la question
         displayQuestions(category); // Rafraîchir l'affichage des questions de la catégorie
     }
 }
 
 console.log("dashboard.js chargé, displayQuestions définie :", typeof displayQuestions);