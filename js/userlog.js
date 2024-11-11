const admin = {
    id : 'admin1',
    role : 'admin',
    username : "admin",
};

const adminJson = JSON.stringify(admin);
sessionStorage.setItem("admin", adminJson);


function createUser() {
    var userName = document.getElementById('username').value;
    

    if(sessionStorage.getItem(userName)){
        const userRole = sessionStorage.getItem(userName) && JSON.parse(sessionStorage.getItem(userName)).role;
        
        if(userRole !== 'admin'){
            window.location.href = "userlevel.html";
            // const userSection = document.getElementById("user-section");
            // userSection.classList.remove('hidden');
            // let user = JSON.parse(sessionStorage.getItem(userName));
            // userSection.innerHTML = `
            //     <h2>Bienvenue, ${user.username}!</h2>
            //     <p>Niveau actuel: ${user.lastLivelScore}</p>
            //     <p>Catégorie: ${user.category}</p>
            //     <p>Score: ${user.score}</p>
            // `;
            return;
        }else{
            window.location.href = "admin.html";
            return;
        }
    }
 

    const userId = 'user_'+ new Date().getTime();

    const user = {
        id : userId,
        role : 'user',
        username : userName,
        score : 0,
        quizResponses : [],
        category : "Grammaire",
        lastCorrectScore : 0,
        lastLivelScore : "A1"
    };

    const userJson = JSON.stringify(user);
    sessionStorage.setItem(userName, userJson);
    alert(`Good job ${userName} Lets Start !`);
    //redirectToUserLevel(username);
}

