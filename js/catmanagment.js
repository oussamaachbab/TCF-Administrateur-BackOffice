document.addEventListener("DOMContentLoaded",()=>{
    const params = new URLSearchParams(window.location.search);
    const username = params.get("userName");
    const storedUser = JSON.parse(sessionStorage.getItem(username));
    alert(userName);
    let cat_a2 = document.getElementsByClassName("cat-a2");
    alert(storedUser);
    if (!storedUser) {
        alert("The user has not been found");
    } else if (storedUser.categories["grammar"] && storedUser.categories["vocabulary"] && storedUser.categories["comprehension"]) {
        alert("every thing is fine");
        for (let i = 0; i < cat_a2.length; i++) {
            cat_a2[i].disabled = false;
        }
    }
});
