import { gap } from '../_vars';

const portSlider = document.querySelector('.portfolio-section__items');
const nextBtn = document.querySelector('.portfolio-section__next');
const prevBtn = document.querySelector('.portfolio-section__prev');

const portfolioSlider = new Swiper('.portfolio-section__items', {
  slidesPerView: 3,
  spaceBetween: gap,
  navigation: {
    nextEl: '.portfolio-section__next',
    prevEl: '.portfolio-section__prev',
  },
  on: {
    init: function () {
      const activeSlide = portSlider.querySelector('.swiper-slide-active');
      const nextActiveSlide = activeSlide.nextElementSibling;
      const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

      activeSlide.classList.add('slider-visible');
      nextActiveSlide.classList.add('slider-visible');
      nextNextActiveSlide.classList.add('slider-visible');
    },
  },
});

nextBtn.addEventListener('click', () => {
    const activeSlide = portSlider.querySelector('.swiper-slide-active');
    const nextActiveSlide = activeSlide.nextElementSibling;
    const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

    document.querySelectorAll('.portfolio-section__items .swiper-slide').forEach(el => {
      el.classList.remove('slider-visible');
    })

    activeSlide.classList.add('slider-visible');
    nextActiveSlide.classList.add('slider-visible');
    nextNextActiveSlide.classList.add('slider-visible');
})

prevBtn.addEventListener('click', () => {
  const activeSlide = portSlider.querySelector('.swiper-slide-next');
  if (activeSlide.previousElementSibling) {
    const prevActiveSlide = activeSlide.previousElementSibling;
    const nextActiveSlide = activeSlide.nextElementSibling;
    const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

    prevActiveSlide.classList.add('slider-visible');
    nextNextActiveSlide.classList.remove('slider-visible');
  }
})
