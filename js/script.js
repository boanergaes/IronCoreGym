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