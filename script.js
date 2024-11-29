window.onload = onPageload;

function onPageload() {
    function getLanguage() {
        const language = navigator.language;
        return language;
    }

    const userLanguage = getLanguage();
    console.log("Browser language is set to:", userLanguage);

        if (userLanguage === "ar || ar-DZ || ar-BH || ar-TD || ar-KM || ar-DJ || ar-EG || ar-ER || ar-IQ || ar-IL || ar-JO || ar-KW || ar-LB || ar-LY || ar-MR || ar-MA || ar-OM || ar-PS || ar-QA || ar-SA || ar-SO || ar-SS || ar-SD || ar-SY || ar-TN || ar-AE || ar-EH || ar-YE ||ff || ff-GN || ff-CM || ff-MR || ff-SN || he || he-IL || bm || bm-Latn || hu || hu-HU || syr || aii || cld || mid || ku || ku-IR || ug || ug-CN || sd || sd-PK || sd-IN || ks || ks-IN || ps || ps-AF || ps-PK || dv || dv-MV") {
            const offcanvasButton = document.getElementById('offcanvas-btn')
            const offcanvasButtonRTL = document.getElementById('offcanvas-btn-rtl')
            offcanvasButton.style.visibility = 'hidden';
            offcanvasButtonRTL.style.visibility = 'visible';
        }

        else {
            console.log('dir="ltr"');

        }
}
