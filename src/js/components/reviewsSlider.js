const swiper = new Swiper('.reviews__slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 40,
  centeredSlides: true,
  navigation: {
    nextEl: '.reviews__slider-arrow--next',
    prevEl: '.reviews__slider-arrow--prev',
  },
  pagination: {
    el: '.reviews__slider-pagination',
    type: 'bullets',
    clickable: true,
  }
});