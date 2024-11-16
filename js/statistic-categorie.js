// const storedUser  = JSON.parse(localStorage.getItem(username));

// const userCheck = document.getElementById('pdf-search');
// const submitUserCheck = document.getElementById('pdf-submit');

// submitUserCheck.addEventListener('click', () => {
//     if (userCheck.value === storedUser.username) { 
//         generatePDF();
//     } else {
//         document.getElementById('userNotFoundPdf').textContent = 'User  not found'; 
//     }
// });

// function generatePDF() {
//     const { jsPDF } = window.jspdf;
//     const doc = new jsPDF();

//     doc.setFontSize(14);
//     doc.text(10, 10, `Résultats du Quiz de Français de ${storedUser.username}`); 
//     doc.text(10, 20, `Score: ${score} / ${questions.length} - Niveau: ${levelScore(score)}`);
//     doc.text(10, 30, 'Détail des réponses:');
// }






document.addEventListener('DOMContentLoaded', () => {
    const userListElement = document.getElementById('user-list');
    const userSelect = document.getElementById('selected-user');
    const generatePDFButton = document.getElementById('generate-pdf');
    const userNotFoundMessage = document.getElementById('userNotFoundPdf');

    Object.keys(localStorage).forEach(key => {
        try {
            const user = JSON.parse(localStorage.getItem(key));
            if (user && user.username) {
                const option = document.createElement('option');
                option.value = key;
                option.textContent = user.username;
                userSelect.appendChild(option);
            }
        } catch (e) {
            console.error(`Error parsing user data for key ${key}:`, e);
        }
    });

    generatePDFButton.addEventListener('click', () => {
        const selectedUsername = userSelect.value;
        if (!selectedUsername) {
            userNotFoundMessage.textContent = 'Please select a user.';
            return;
        }

        const storedUser = JSON.parse(localStorage.getItem(selectedUsername));
        if (!storedUser) {
            userNotFoundMessage.textContent = 'User not found.';
            return;
        }

        generateUserPDF(storedUser);
    });

    function generateUserPDF(user) {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        let yOffset = 10; // Starting y-coordinate
        const lineHeight = 10; // Space between lines

        doc.setFontSize(14);
        doc.text(10, 10, `Quiz Results for: ${user.username}`);
        yOffset += lineHeight;
        doc.text(10, 20, `Category: ${user.category || 'N/A'}`);
        yOffset += lineHeight;
        doc.text(10, 30, `Score: ${user.score || 0}`);
        yOffset += lineHeight;
        doc.text(10, 40, `Responses:`);

        if (user.responses) {
            user.responses.forEach((response, index) => {
                yOffset += lineHeight;
                doc.text(10, 50 + (index * 10), `${index + 1}. Q: ${response.question}`);
                yOffset += lineHeight;
                doc.text(15, 55 + (index * 10), `Answer: ${response.userAnswer}`);
                yOffset += lineHeight;
                doc.text(15, 60 + (index * 10), `Correct: ${response.isCorrect ? 'Yes' : 'No'}`);
                yOffset += lineHeight;
            });
        } else {
            doc.text(10, 50, 'No responses found.');
        }

        doc.save(`${user.username}_quiz_results.pdf`);
    }
});




document.addEventListener('DOMContentLoaded', () => {
    const totalUsersElement = document.getElementById('total-users');
    const passedA1Element = document.getElementById('passed-a1');
    const passedA2Element = document.getElementById('passed-a2');
    const passedB1Element = document.getElementById('passed-b1');
    const passedB2Element = document.getElementById('passed-b2');
    const passedC1Element = document.getElementById('passed-c1');
    const passedC2Element = document.getElementById('passed-c2');
    const passedElement = document.getElementById('passed');

    function calculateStatistics() {
        let totalUsers = 0;
        let passedA1 = 0;
        let passedA2 = 0;
        let passedB1 = 0;
        let passedB2 = 0;
        let passedC1 = 0;
        let passedC2 = 0;
        let passed = 0;

        Object.keys(localStorage).forEach(key => {
            try {
                const user = JSON.parse(localStorage.getItem(key));
                if (user && user.username) {
                    totalUsers++;
                    if (user.categorys) {
                        if (user.categorys.a1) passedA1++;
                        if (user.categorys.a2) passedA2++;
                        if (user.categorys.b1) passedB1++;
                        if (user.categorys.b2) passedB2++;
                        if (user.categorys.c1) passedC1++;
                        if (user.categorys.c2) passedC2++;
                        if (user.categorys.c2) passed++;
                    }
                }
            } catch (e) {
                console.error(`Error parsing user data for key ${key}:`, e);
            }
        });

        // Update the DOM
        totalUsersElement.querySelector('.stat-title').textContent = totalUsers;
        passedA1Element.querySelector('.stat-title').textContent = totalUsers - passedA1; // Assuming those who haven't passed A1
        passedA2Element.querySelector('.stat-title').textContent = passedA2;
        passedB1Element.querySelector('.stat-title').textContent = passedB1;
        passedB2Element.querySelector('.stat-title').textContent = passedB2;
        passedC1Element.querySelector('.stat-title').textContent = passedC1;
        passedC2Element.querySelector('.stat-title').textContent = passedC2;
        passedElement.querySelector('.stat-title').textContent = passed;
    }

    // Refresh statistics on page load
    calculateStatistics();

    // Optionally, you can listen for user actions like registration or level completion
    window.addEventListener('storage', calculateStatistics); // To handle changes across tabs
});

