function setDirection(direction) {
    document.documentElement.setAttribute('dir', direction);
}

// Example usage: set direction to RTL
setDirection('rtl');

// Example usage: set direction to LTR
setDirection('ltr');

if (document.documentElement.getAttribute('dir') === 'rtl') {
    function setDirectionToLTR() {
        document.documentElement.setAttribute('dir', 'ltr');
    }
}