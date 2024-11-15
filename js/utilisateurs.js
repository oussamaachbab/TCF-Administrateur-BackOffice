document.addEventListener("DOMContentLoaded",()=>{
    displayAllUsers()
})

function displayAllUsers() {
    const usersContainer = document.getElementById('usersContainer');
    usersContainer.innerHTML = "";

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const userData = localStorage.getItem(key);

        // Vérification que les données sont un JSON valide
        if (isJsonString(userData)) {
            const user = JSON.parse(userData);
            if (user && user.role === "admin") {
                return;
            }
            
        if (user && user.role) {
            const userElement = document.createElement('div');
            userElement.textContent = `
                Nom d'utilisateur : ${user.username}, 
                Rôle : ${user.role}, 
                Score : ${user.score}, 
                Niveau : ${user.LevelScore || 'Non spécifié'}
            `;
            usersContainer.appendChild(userElement);
        }
    }
    }

    if (usersContainer.innerHTML === "") {
        usersContainer.textContent = "Aucun utilisateur trouvé dans le localStorage.";
    }
}

// Fonction utilitaire pour vérifier si une chaîne est un JSON valide
function isJsonString(str) {
    try {
        JSON.parse(str);
        return true;
    } catch (e) {
        return false;
    }
}
