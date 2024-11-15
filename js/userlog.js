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
    const now = new Date();
    const user = {
        id : userId,
        role : 'user',
        username : userName,
        score : 0,
        categorys : {
            "grammar":false,
            "vocabulary":false,
            "comprehension":false,
        },
        category : "",
        LivelScore : "a1",
        responses : {},
        date : `${String(now.getDate()).padStart(2, '0')}-${String(now.getMonth() + 1).padStart(2, '0')}-${now.getFullYear()}`
        // date : "15-11-2024"
        
    };
    
    const userJson = JSON.stringify(user);
    localStorage.setItem(userName, userJson);
    alert(`Good job ${userName} Lets Start !`);
    window.location.href = "categories.html?userName="+userName;
    
}





