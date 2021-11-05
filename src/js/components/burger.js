const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav')

burger.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('burger--active');
  nav.classList.toggle('header__nav--active');
});