
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const username = params.get('userName');

    const user = JSON.parse(sessionStorage.getItem(username));
    
    if (user) {
        const level = user.level;
        const lastLevelScore = user.lastLevelScore;
        //console.log(level + ' ' + lastLevelScore);

        let userHello = document.getElementById('userhello');
        userHello.textContent = `Bienvenue, ${user.username}!`;
    } else {
        console.log("User not found in sessionStorage");
    }
});


import levels from "../js/data.js"





