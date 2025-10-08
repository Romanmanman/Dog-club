const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 3,
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__bullet',
    bulletActiveClass: 'pagination__bullet--active',
  },
  navigation: {
    nextEl: '.happy-section__button.next',
    prevEl: '.happy-section__button.prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
});
