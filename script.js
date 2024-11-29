window.onload = onPageload;

function onPageload() {
    function getLanguage() {
        const language = navigator.language;
        return language;
    }

    const userLanguage = getLanguage();
    console.log("Browser language is set to:", userLanguage);

        if (userLanguage === "en-EN") {
            const offcanvasButton = document.getElementById('offcanvas-btn')
            const offcanvasButtonRTL = document.getElementById('offcanvas-btn-rtl')
            offcanvasButton.style.visibility = 'hidden';
            offcanvasButtonRTL.style.visibility = 'visible';
        }

        else {
            console.log('dir="ltr"');

        }
}
