// Function to handle redirection to the quiz with level and category
function redirectToQuiz(level, category) {
    const params = new URLSearchParams(window.location.search);
    const username = params.get("userName");
    const storedUser = JSON.parse(sessionStorage.getItem(username));

    if (!storedUser) {
        alert("User not found. Please create an account first.");
        window.location.href = "userlog.html";
        return;
    }

    // Update only the category and LivelScore fields in the stored user object
    storedUser.category = category;
    storedUser.LivelScore = level;

    // Save the updated user object back to sessionStorage
    sessionStorage.setItem(username, JSON.stringify(storedUser));

    // Redirect to the quiz page with the username in the URL
    window.location.href = `userlevelquiz.html?userName=${storedUser.username}`;
}

// Function to initialize the quiz page (in `userlevelquiz.html`)
function initializeQuizPage() {
    const params = new URLSearchParams(window.location.search);
    const username = params.get("userName");

    if (!username) {
        alert("Username is missing from the URL.");
        window.location.href = "userlog.html";
        return;
    }

    const user = JSON.parse(sessionStorage.getItem(username));
    const level = user ? user.LivelScore : null;
    const category = user ? user.category : null;

    if (user && level && category) {
        console.log("User:", user);
        console.log("Level:", level);
        console.log("Category:", category);

        document.getElementById("quiz-container").insertAdjacentHTML(
            "beforebegin",
            `<h2>Welcome, ${user.username}! You're taking the ${category} quiz at level ${level}.</h2>`
        );

    } else {
        alert("Quiz information is missing.");
        window.location.href = "categories.html";
    }
}

if (window.location.pathname.includes("userlevelquiz.html")) {
    document.addEventListener("DOMContentLoaded", initializeQuizPage);
}
