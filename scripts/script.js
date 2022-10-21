const mainMenu = document.querySelector('.mainMenu');

let toggleStatus = 1;
function toggleMenu() {
    if (toggleStatus == 1) {
        if (window.innerWidth > 457) {
            mainMenu.style.top = '10rem';
        } else {
            mainMenu.style.top = '8rem';
        }
        toggleStatus = 0;
    }
    else if (toggleStatus == 0) {
        mainMenu.style.top = '-100%';
        toggleStatus = 1;
    }
}