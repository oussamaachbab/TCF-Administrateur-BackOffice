document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const username = params.get("userName");
    const storedUser = JSON.parse(sessionStorage.getItem(username));
    
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
                sessionStorage.setItem(username, JSON.stringify(storedUser));
                break;
            case 'a2':
                nextLevelIndex = levels.indexOf("cat-b1");
                storedUser.LivelScore = "b1";
                storedUser.categorys.comprehension = false;
                storedUser.categorys.grammar = false;
                storedUser.categorys.vocabulary = false;
                sessionStorage.setItem(username, JSON.stringify(storedUser));
                break;
            case 'b1':
                nextLevelIndex = levels.indexOf("cat-b2");
                storedUser.LivelScore = "b2";
                storedUser.categorys.comprehension = false;
                storedUser.categorys.grammar = false;
                storedUser.categorys.vocabulary = false;
                sessionStorage.setItem(username, JSON.stringify(storedUser));
                break;
            case 'b2':
                nextLevelIndex = levels.indexOf("cat-c1");
                storedUser.LivelScore = "c1";
                storedUser.categorys.comprehension = false;
                storedUser.categorys.grammar = false;
                storedUser.categorys.vocabulary = false;
                sessionStorage.setItem(username, JSON.stringify(storedUser));
                break;
            case 'c1':
                nextLevelIndex = levels.indexOf("cat-c2");
                storedUser.LivelScore = "c2";
                storedUser.categorys.comprehension = false;
                storedUser.categorys.grammar = false;
                storedUser.categorys.vocabulary = false;
                sessionStorage.setItem(username, JSON.stringify(storedUser));
                break;
            // case 'c2':
            //     nextLevelIndex = levels.indexOf("cat-c2");
            //     storedUser.LivelScore = "a2";
            //     storedUser.categorys.comprehension = false;
            //     storedUser.categorys.grammar = false;
            //     storedUser.categorys.vocabulary = false;
            //     sessionStorage.setItem(username, JSON.stringify(storedUser));
            //    break;
            default:
                alert("Error: No Score Level Assigned");
                return;
        }

        // Enable buttons up to and including the next level
        for (let i = 0; i <= nextLevelIndex; i++) {
            const levelClass = levels[i];
            let buttons = document.getElementsByClassName(levelClass);
            for (let j = 0; j < buttons.length; j++) {
                buttons[j].disabled = false;
            }
        }

        // // Disable buttons in levels above the next level
        // for (let i = nextLevelIndex + 1; i < levels.length; i++) {
        //     const levelClass = levels[i];
        //     let buttons = document.getElementsByClassName(levelClass);
        //     for (let j = 0; j < buttons.length; j++) {
        //         buttons[j].disabled = true;
        //     }
        // }
    }
});

