document.getElementById('loginsubmit').addEventListener('click',function (event){
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('message');
    const adminData = JSON.parse(sessionStorage.getItem('admin'));
    const username_storage = adminData.username;
    const password_storage = adminData.password;
    if(username ==="" || password ===""){
        message.textContent = "Merci de Remplire les champs";
        return;
    }
    
    if(username === password_storage && password === username_storage){
        window.location.href = "admindashbord.html";
    }else {
        message.textContent = "Invalid Username ou Password";
    }

});
