const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

// toggles menu on click
hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
    hamburger.classList.toggle('show');
});
