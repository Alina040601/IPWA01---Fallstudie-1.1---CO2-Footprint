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

const offcanvasStart = document.querySelector('.offcanvas.offcanvas-start');
const offcanvasStartShow = document.querySelector('.offcanvas.offcanvas-start.show');
const offcanvasStartShowing = document.querySelector('.offcanvas.offcanvas-start.showing');
const offcanvasStartHiding = document.querySelector('offcanvas.offcanvas-start.show.hiding');

function changeCSSVariable() {
    
        offcanvasStart.style.right = "0";
        offcanvasStart.style.transform = "translateX(+100%)";

        offcanvasStartShowing.style.transform = "translateX(0)";    

        offcanvasStartShow.style.transform = "translateX(0)";

        offcanvasStartHiding.style.transform = "translateX(+100%)";
    }

document.addEventListener('DOMContentLoaded', () => {
    const offcanvasElement = document.querySelector('.offcanvas.offcanvas-start');

    if (offcanvasStartShow) {
        // Listen for when the offcanvas is fully shown
        offcanvasStartShow.addEventListener('shown.bs.offcanvas', () => {
            console.log('Offcanvas is now shown.');
            offcanvasStartShow.style.transform = 'translateX(0)';
        });

        // Listen for when the offcanvas is fully hidden
        offcanvasStartHiding.addEventListener('hidden.bs.offcanvas', () => {
            console.log('Offcanvas is now hidden.');
            offcanvasStartHiding.style.transform = 'translateX(+100%)';
        });
    }
});    

const hn = ".bs.modal"
