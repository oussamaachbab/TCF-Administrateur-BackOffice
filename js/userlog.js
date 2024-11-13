

const admin = {
    id : 'admin1',
    role : 'admin',
    username : "admin",
    password : "admin",
};

const adminJson = JSON.stringify(admin);
sessionStorage.setItem("admin", adminJson);




function createUser() {
    var userName = document.getElementById('username').value;
    
    
    if(sessionStorage.getItem(userName)){
        const userRole = sessionStorage.getItem(userName) && JSON.parse(sessionStorage.getItem(userName)).role;
        
        if(userRole !== 'admin'){
            window.location.href = "categories.html?userName="+userName;
            return;
        }else {
            alert("Merci de Choisir la Correct Serssion!");
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
        categorys : {
            "grammar":true,
            "vocabulary":true,
            "comprehension":true
        },
        category : "",
        LivelScore : "b1",
        
    };
    
    const userJson = JSON.stringify(user);
    sessionStorage.setItem(userName, userJson);
    alert(`Good job ${userName} Lets Start !`);
    window.location.href = "categories.html?userName="+userName;
    // window.location.href = "userlevelquiz.html";
    
}

