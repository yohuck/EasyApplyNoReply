let checkTimeout;

let observer = new MutationObserver(() => {
    if (!checkTimeout) {
        checkTimeout = setTimeout(() => {
            checkAndModifyButtons();
            clearTimeout(checkTimeout);
            checkTimeout = null;
        }, 500);
    }
});

function checkAndModifyButtons() {
    let buttons = document.getElementsByClassName("artdeco-button__text");

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].innerText === "Easy Apply") {
            console.log("Here");
            buttons[i].disabled = true;
            buttons[i].innerText = "Easy Apply No Reply";
            break;
        }
    }
}

observer.observe(document.body, { attributes: true, childList: true, subtree: true });

checkAndModifyButtons();  

  

  

 