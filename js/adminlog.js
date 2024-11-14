// const admin = {
//     id : 'admin1',
//     role : 'admin',
//     username : "admin",
//     password : "admin",
// };

// const adminJson = JSON.stringify(admin);
// localStorage.setItem("admin", adminJson);
document.getElementById('loginsubmit').addEventListener('click',function (event){
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    const adminData = JSON.parse(localStorage.getItem('admin'));
    const username_storage = adminData.username;
    const password_storage = adminData.password;
    if(username ==="" || password ===""){
        message.textContent = "Merci de Remplire les champs";
        return;
    }
    
    if(username === password_storage && password === username_storage){
        window.location.href = "dashboard.html";
    }else {
        message.textContent = "Invalid Username ou Password";
    }

});
