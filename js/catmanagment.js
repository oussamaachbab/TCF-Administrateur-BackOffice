document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const username = params.get("userName");
    const storedUser = JSON.parse(localStorage.getItem(username));
    const disuser = document.getElementById('disuser');

    disuser.textContent = "USERNAME : " + params.get("userName")
    
    if (storedUser.categorys.comprehension && storedUser.categorys.grammar && storedUser.categorys.vocabulary) {

        const levels = ["cat-a2", "cat-b1", "cat-b2", "cat-c1", "cat-c2"];
        
        let nextLevelIndex;
        switch (storedUser.LivelScore.toLowerCase()) {
            case 'a1':
                nextLevelIndex = levels.indexOf("cat-a2");
                storedUser.LivelScore = "a2";
                storedUser.categorys.comprehension = false;
                storedUser.categorys.grammar = false;
                storedUser.categorys.vocabulary = false;
                localStorage.setItem(username, JSON.stringify(storedUser));
                break;
            case 'a2':
                nextLevelIndex = levels.indexOf("cat-b1");
                storedUser.LivelScore = "b1";
                storedUser.categorys.comprehension = false;
                storedUser.categorys.grammar = false;
                storedUser.categorys.vocabulary = false;
                localStorage.setItem(username, JSON.stringify(storedUser));
                break;
            case 'b1':
                nextLevelIndex = levels.indexOf("cat-b2");
                storedUser.LivelScore = "b2";
                storedUser.categorys.comprehension = false;
                storedUser.categorys.grammar = false;
                storedUser.categorys.vocabulary = false;
                localStorage.setItem(username, JSON.stringify(storedUser));
                break;
            case 'b2':
                nextLevelIndex = levels.indexOf("cat-c1");
                storedUser.LivelScore = "c1";
                storedUser.categorys.comprehension = false;
                storedUser.categorys.grammar = false;
                storedUser.categorys.vocabulary = false;
                localStorage.setItem(username, JSON.stringify(storedUser));
                break;
            case 'c1':
                nextLevelIndex = levels.indexOf("cat-c2");
                storedUser.LivelScore = "c2";
                storedUser.categorys.comprehension = false;
                storedUser.categorys.grammar = false;
                storedUser.categorys.vocabulary = false;
                localStorage.setItem(username, JSON.stringify(storedUser));
                break;
            // case 'c2':
            //     nextLevelIndex = levels.indexOf("cat-c2");
            //     storedUser.LivelScore = "a2";
            //     storedUser.categorys.comprehension = false;
            //     storedUser.categorys.grammar = false;
            //     storedUser.categorys.vocabulary = false;
            //     localStorage.setItem(username, JSON.stringify(storedUser));
            //    break;
            default:
                alert("Error: No Score Level Assigned");
                return;
            
        }

        for (let i = 0; i <= nextLevelIndex; i++) {
            const levelClass = levels[i];
            let buttons = document.getElementsByClassName(levelClass);
            for (let j = 0; j < buttons.length; j++) {
                buttons[j].disabled = false;
            }
        }

        return;
    }

    const levelToOpen = ["cat-a2", "cat-b1", "cat-b2", "cat-c1", "cat-c2"];
        
        let nextLevelIndex;
        switch (storedUser.LivelScore.toLowerCase()) {
            case 'a1':
                nextLevelIndex = levelToOpen.indexOf("cat-a1");
                break;
            case 'a2':
                nextLevelIndex = levelToOpen.indexOf("cat-a2");
                break;
            case 'b1':
                nextLevelIndex = levelToOpen.indexOf("cat-b1");

                break;
            case 'b2':
                nextLevelIndex = levelToOpen.indexOf("cat-b2");
                break;
            case 'c1':
                nextLevelIndex = levelToOpen.indexOf("cat-c1");
                break;
            case 'c2':
                nextLevelIndex = levelToOpen.indexOf("cat-c2");
               break;
            default:
                alert("Error: No Score Level Assigned");
                return;
        }
        for (let i = 0; i <= nextLevelIndex; i++) {
            const classOpen = levelToOpen[i];
            let buttonsOpen = document.getElementsByClassName(classOpen);
            for (let j = 0; j < buttonsOpen.length; j++) {
                buttonsOpen[j].disabled = false;
            }
        }
});


