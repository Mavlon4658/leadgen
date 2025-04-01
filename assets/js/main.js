const homeSwp = new Swiper('.home .swiper', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  speed: 7000,
  loop: true,
  autoplay: {
      delay: 0,
      reverseDirection: false,
      disableOnInteraction: false,
  },
  watchSlidesProgress: false,
  allowTouchMove: false,
})