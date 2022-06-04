const hamburger = document.querySelector(".hamburger"),
      nav = document.querySelector(".nav"),
      overlay = document.querySelector(".overlay");

hamburger.addEventListener('click', () => {
    if (!hamburger.classList.contains('hamburger_close')) {
        hamburger.classList.add('hamburger_close');
        nav.style.left = '0';
        overlay.classList.add('overlay_active');
    } else {
        hamburger.classList.remove('hamburger_close');
        nav.style.left = '-100%';
        overlay.classList.remove('overlay_active');
    }
});

if (window.screen.width >= 768) {
    nav.style.left = 0;
}

const percentBars = document.querySelectorAll('.ticket__item-percent'),
      colorBars = document.querySelectorAll('.ticket__item-bar_active');

console.log(percentBars, colorBars);

percentBars.forEach((elem, i) => {
    colorBars[i].style.width = elem.innerHTML;
});
