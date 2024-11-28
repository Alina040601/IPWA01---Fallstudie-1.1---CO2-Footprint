window.onload = onPageload;

function onPageload() {
    function getLanguage() {
        const language = navigator.language;
        return language;
    }

    const userLanguage = getLanguage();
    console.log("Browser language is set to:", userLanguage);

if (userLanguage === "de-DE") {
    changeCSSVariable();
}

else {
    console.log("No changes made to CSS variables");

}
}

const offcanvasStart = document.querySelector(".offcanvas.offcanvas-start");
const offcanvasStartShow = document.querySelector(".offcanvas.offcanvas-start.show");
const offcanvasStartShowing = document.querySelector(".offcanvas.offcanvas-start.showing");
const offcanvasStartHidig = document.querySelector(".offcanvas.offcanvas-start.hiding");

function changeCSSVariable() {
    if (offcanvasStart) {
        offcanvasStart.style.right = "0";
        offcanvasStart.style.transform = "translateX(+100%)";
        offcanvasStart.style.transition = "ease-in-out 0.5s";
    }
    if (offcanvasStartShow) {
        offcanvasStartShow.style.transform = "translateX(0)";
    }
    if (offcanvasStartShowing) {
        offcanvasStartShowing.style.transform = "translateX(0)";
    }
    if (offcanvasStartHidig) {
        offcanvasStartHidig.style.transform = "translateX(+100%)";
    }
}
