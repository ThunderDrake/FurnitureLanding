const slides = [...document.querySelectorAll('.portfolio__slider-slide')];
const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
let newArray = everyNth(slides, 3);

newArray.forEach(el => {
  el.insertAdjacentHTML('afterend',`
  <div class="portfolio__slider-slide portfolio__slider-slide--hide swiper-slide">
  </div>
  `)
});

const swiper = new Swiper('.portfolio__slider', {
  slidesPerView: 3,
  spaceBetween: 20,
  grid: {
    rows: 2,
  },
  navigation: {
    nextEl: '.portfolio__slider-arrow--next',
    prevEl: '.portfolio__slider-arrow--prev',
  },
  breakpoints: {
    320: {
      spaceBetween: 10
    },
    450: {
      spaceBetween: 20
    }
  }
});