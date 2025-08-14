const body = document.body;
const menuButton = document.querySelector('.menu');
const navBar = document.querySelector('nav');
const cancelButton = document.querySelector('.cancel');
const header = document.querySelector('header');
const themeButton = document.querySelector('.theme');
const narrowTop = document.querySelector('.narrow-top');

function themeAppender(themeBtn, container) {
    container.insertBefore(themeBtn, cancelButton);
}

function themeRemover(themeBtn, addCont) {
    themeBtn.remove();
    addCont.append(themeBtn);
}

menuButton.addEventListener('click', () => {
    header.style.overflow = 'visible';
    navBar.classList.add('narrow');
    themeAppender(themeButton, narrowTop);
    console.log('menu called');
})

cancelButton.addEventListener('click', () => {
    header.style.overflow = 'hidden';
    navBar.classList.remove('narrow');
    themeRemover(themeButton, navBar);
    console.log('cancel called');
})

// theme toggling

// const headerLogo {
//     light: ''

// }

const theme = localStorage.getItem('theme');
if (theme === null) {
    localStorage.setItem('theme', 'dark');
} else if (theme === 'light') {
    body.classList.add('light');
}

function applyTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        localStorage.setItem('theme', 'light');
        body.classList.add('light');
    } else {
        localStorage.setItem('theme', 'dark');
        body.classList.remove('light');
    }
}

themeButton.addEventListener('click', () => {
    applyTheme();
})