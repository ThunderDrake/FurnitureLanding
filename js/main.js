"use strict";

console.log('global');
"use strict";

var burger = document.querySelector('.burger');
var nav = document.querySelector('.header__nav');
burger.addEventListener('click', function (e) {
  e.currentTarget.classList.toggle('burger--active');
  nav.classList.toggle('header__nav--active');
});
"use strict";

var links = document.querySelectorAll('.scroll-link');
links.forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    var sectionID = e.target.getAttribute('href').substr(1);
    var sectionPosition = document.getElementById(sectionID).offsetTop;
    window.scrollTo({
      top: sectionPosition - 150,
      behavior: 'smooth'
    });
  });
});
"use strict";

var swiper = new Swiper('.partners__slider', {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 40,
  navigation: {
    nextEl: '.partners__slider-arrow--next',
    prevEl: '.partners__slider-arrow--prev'
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
  }
});
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var slides = _toConsumableArray(document.querySelectorAll('.portfolio__slider-slide'));

var everyNth = function everyNth(arr, nth) {
  return arr.filter(function (e, i) {
    return i % nth === nth - 1;
  });
};

var newArray = everyNth(slides, 3);
newArray.forEach(function (el) {
  el.insertAdjacentHTML('afterend', "\n  <div class=\"portfolio__slider-slide portfolio__slider-slide--hide swiper-slide\">\n  </div>\n  ");
});
var swiper = new Swiper('.portfolio__slider', {
  slidesPerView: 3,
  spaceBetween: 20,
  grid: {
    rows: 2
  },
  navigation: {
    nextEl: '.portfolio__slider-arrow--next',
    prevEl: '.portfolio__slider-arrow--prev'
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
"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var accordions = document.querySelectorAll('.accordion');
  accordions.forEach(function (el) {
    el.addEventListener('click', function (e) {
      var self = e.currentTarget;
      var control = self.querySelector('.accordion__control');
      var content = self.querySelector('.accordion__content');
      self.classList.toggle('open'); // если открыт аккордеон

      if (self.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    });
  });
});
"use strict";

var swiper = new Swiper('.reviews__slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 40,
  centeredSlides: true,
  navigation: {
    nextEl: '.reviews__slider-arrow--next',
    prevEl: '.reviews__slider-arrow--prev'
  },
  pagination: {
    el: '.reviews__slider-pagination',
    type: 'bullets',
    clickable: true
  }
});
/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
"use strict";
//# sourceMappingURL=main.js.map
