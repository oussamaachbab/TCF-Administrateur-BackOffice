document.addEventListener("DOMContentLoaded",()=>{
    const searchInput=document.getElementById("searchInput");
    const usersContainer1=document.getElementById("usersContainer1");
    const sortSelect=document.getElementById("sortSelect");
    //pour afficher tous les utilisateurs au chargement
    displayAllUsers();

    //pour ajouter un événement de recherche
    searchInput.addEventListener("input",()=>{
        if(searchInput.value===""){
            usersContainer1.innerHTML="";//réinitialiser le conteneur de recherche
            displayAllUsers();
        }else{
            //sinon effecturer la recherche et le tri
            searchUserByName(searchInput,usersContainer1);
        }
    });

    //ajouter un evenement pour changer le critére de tri
    sortSelect.addEventListener("change",()=>{
        //tri aprés une recharche
        if(searchInput.value !==""){
            searchUserByName(searchInput,usersContainer1);
        }else{
            displayAllUsers();
        }
    });
});

function displayAllUsers() {
    const usersContainer=document.getElementById("usersContainer");
    usersContainer.innerHTML="";

    //récupérer tous les utilisateurs dans un tableau
    const users=[];
    for(let i=0;i<localStorage.length;i++){
        const key=localStorage.key(i);
        const userData=localStorage.getItem(key);

        if (isJsonString(userData)){
            const user=JSON.parse(userData);
            //ignorer l'admin
            if(user && user.role==="admin") 
                continue;

            if(user && user.username){
                users.push(user);
            }
        }
    }

    //trier selon le critére choisi
    const sortBy=document.getElementById("sortSelect").value;

    if(sortBy==="username"){
        users.sort((a,b)=>a.username.localeCompare(b.username));//par nom
    }else if(sortBy==="level"){
        users.sort((a,b)=>a.LivelScore.localeCompare(b.LivelScore));//par niveau
    }

    //aficher les utilisateurs triés
    users.forEach(user=>{
        const userElement=document.createElement("div");
        userElement.className="user-card";
        userElement.innerHTML=`
            <h3>${user.username}</h3>
            <p><strong>Rôle :</strong> ${user.role}</p>
            <p><strong>Score :</strong> ${user.score}</p>
            <p><strong>Niveau :</strong> ${user.LivelScore || "Non spécifié"}</p>
            <p><strong>Date :</strong> ${user.date}</p>
        `;
        userElement.style.border="2px solid #007bff";
        userElement.style.borderRadius="10px";
        userElement.style.padding="10px";
        userElement.style.margin="10px";
        userElement.style.backgroundColor="#f9f9f9";
        userElement.style.boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)";
        usersContainer.appendChild(userElement);
    });
    

    if (usersContainer.innerHTML===""){
        usersContainer.textContent="Aucun utilisateur trouvé dans le localStorage.";
    }
}

function searchUserByName(searchInput,usersContainer1){
    const searchTerm=searchInput.value.toLowerCase();
    usersContainer1.innerHTML="";

    const users=[];
    for (let i=0;i<localStorage.length;i++){
        const key=localStorage.key(i);
        const userData=localStorage.getItem(key);

        if(isJsonString(userData)){
            const user=JSON.parse(userData);
            //vérifier que le username existe avant d'utiliser toLowerCase
            if (user && user.username && user.username.toLowerCase().includes(searchTerm) && user.role !== "admin"){
                users.push(user);
            }
        }
    }

    //trier les utilisateurs par niveau ou nom
    const sortBy=document.getElementById("sortSelect").value;
    if(sortBy==="level"){
        users.sort((a,b)=>a.LivelScore.localeCompare(b.LivelScore));
    } else if (sortBy === "username") {
        users.sort((a,b)=>a.username.localeCompare(b.username));
    }
    //afficher les utilisateurs triés
    users.forEach(user=>{
        const userElement=document.createElement("div");
        userElement.className="user-card";
        userElement.innerHTML=`
            <h3>${user.username}</h3>
            <p><strong>Rôle :</strong> ${user.role}</p>
            <p><strong>Score :</strong> ${user.score}</p>
            <p><strong>Niveau :</strong> ${user.LivelScore||"Non spécifié"}</p>
            <p><strong>Date :</strong> ${user.date}</p>
        `;
        userElement.style.border="2px solid #007bff";
        userElement.style.borderRadius="10px";
        userElement.style.padding="10px";
        userElement.style.margin="10px";
        userElement.style.backgroundColor="#f9f9f9";
        userElement.style.boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)";
        usersContainer1.appendChild(userElement);
    });
    if (usersContainer1.innerHTML === "") {
        usersContainer1.textContent = "Aucun utilisateur trouvé pour cette recherche.";
    }
}

function isJsonString(str){
    try{
        JSON.parse(str);
        return true;
    }catch (e){
        return false;
    }
}
