const back = document.getElementById('back-btn');
const navbar = document.getElementById('navbar');
const setting = document.getElementById('setting');
setting.addEventListener('click', () => {
    navbar.classList.remove('navbar');
});

back.addEventListener('click', () => {
    navbar.classList.add('navbar');
});
