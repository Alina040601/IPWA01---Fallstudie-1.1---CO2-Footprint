const offcanvas = document.getElementById("menu");

const menuButton = document.getElementById("offcanvas-btn");
    menuButton.addEventListener("click", menuClick);

function menuClick() {
        console.log("menu clicked");
}

const language = navigator.language;
console.log(language);
function getLanguage() {
    navigator.language;
    returnLanguage();
    function returnLanguage() {
        if (language === "de-DE") {
            console.log("Deutsch");
        }
    }
}
