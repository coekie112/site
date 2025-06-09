const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const menubox = document.getElementById("menubox")

// toggles menu on click
hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
    hamburger.classList.toggle('closed')
    menubox.classList.toggle('open')
    topline.classList.toggle('animation')
    bottomline.classList.toggle('animation')
});
