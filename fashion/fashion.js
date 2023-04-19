// menu click 

const menu = document.querySelector('#bar');
const closes = document.querySelector('#close');
const nav = document.querySelector('#navbar');

menu.addEventListener('click', () => {
    nav.classList.toggle('active');
    menu.classList.toggle('.bx-x');
});

window.onscroll = () => {
    nav.classList.remove('active');
};

closes.addEventListener('click', () => {
    nav.classList.remove('active');
})