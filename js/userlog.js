

const admin = {
    id : 'admin1',
    role : 'admin',
    username : "admin",
    password : "admin",
};

const adminJson = JSON.stringify(admin);
localStorage.setItem("admin", adminJson);




function createUser() {
    var userName = document.getElementById('username').value;
    
    
    if(localStorage.getItem(userName)){
        const userRole = localStorage.getItem(userName) && JSON.parse(localStorage.getItem(userName)).role;
        
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
        LivelScore : "b2"
        
    };
    
    const userJson = JSON.stringify(user);
    localStorage.setItem(userName, userJson);
    alert(`Good job ${userName} Lets Start !`);
    window.location.href = "categories.html?userName="+userName;
    
}

