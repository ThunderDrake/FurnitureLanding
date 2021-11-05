const swiper = new Swiper('.partners__slider', {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 40,
  navigation: {
    nextEl: '.partners__slider-arrow--next',
    prevEl: '.partners__slider-arrow--prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    451: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    769: {
      slidesPerView: 5,
      spaceBetween: 40
    }
  },
});