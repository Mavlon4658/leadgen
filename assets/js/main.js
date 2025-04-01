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

const calculations = document.querySelectorAll('.calculation');

if (calculations.length) {
  calculations.forEach(el => {
    const minus = el.querySelector('.minus');
    const plus = el.querySelector('.plus');
    const price = el.querySelector('.calculation-value');

    const priceNum = () => {
      return parseInt(price.textContent);
    }

    const checkPriceNum = () => {
      if (priceNum() == 0) {
        minus.classList.add('disabled');
      } else {
        minus.classList.remove('disabled');
      }
    }

    checkPriceNum();
    
    plus.onclick = () => {
      price.textContent = priceNum() + 1;
      checkPriceNum();
    }

    minus.onclick = () => {
      if (priceNum() > 0) {
        price.textContent = priceNum() - 1;
        checkPriceNum();
      }
    }
  })
}