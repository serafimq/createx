import {gap} from '../_vars';

const portSlider = document.querySelector('.portfolio-section__items');
const nextBtn = document.querySelector('.portfolio-section__next');
const prevBtn = document.querySelector('.portfolio-section__prev');

const relatedSlider = document.querySelector('.related-project__items');
const nextBtnRelatedSlider = document.querySelector('.related-project__next');
const prevBtnRelatedSlider = document.querySelector('.related-project__prev');

if (portSlider) {
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
}

if (relatedSlider) {
  const portfolioSlider = new Swiper('.related-project__items', {
    slidesPerView: 3,
    spaceBetween: gap,
    navigation: {
      nextEl: '.related-project__next',
      prevEl: '.related-project__prev',
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

  nextBtnRelatedSlider.addEventListener('click', () => {
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

  prevBtnRelatedSlider.addEventListener('click', () => {
    const activeSlide = portSlider.querySelector('.swiper-slide-next');
    if (activeSlide.previousElementSibling) {
      const prevActiveSlide = activeSlide.previousElementSibling;
      const nextActiveSlide = activeSlide.nextElementSibling;
      const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

      prevActiveSlide.classList.add('slider-visible');
      nextNextActiveSlide.classList.remove('slider-visible');
    }
  })
}


const testimonialsSlider = new Swiper('.testimonials__items', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: gap,
  navigation: {
    nextEl: '.testimonials__next',
    prevEl: '.testimonials__prev',
  },
});

const heroSliderSpeed = 1500;

const bodyStyles = window.getComputedStyle(document.body);
const fooBar = bodyStyles.getPropertyValue('--hero-slider-speed');

document.body.style.setProperty('--hero-slider-speed', heroSliderSpeed + 'ms');

const historySlider = document.querySelector('.history-slider')
if (historySlider) {
  const workSlider = new Swiper(historySlider, {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: '.history__next',
      prevEl: '.history__prev',
    },
  })

  workSlider.on('slideChange', function () {
    console.log(workSlider.realIndex);

    historyBtns.forEach(el => {
      el.classList.remove('history-nav__btn--active');
    });

    document.querySelector(`.history-nav__btn[data-index="${workSlider.realIndex}"]`).classList.add('history-nav__btn--active');
  });

  const historyBtns = document.querySelectorAll('.history-nav__btn');

  historyBtns.forEach((el, idx) => {
    el.setAttribute('data-index', idx);
    el.addEventListener('click', (e) => {
      const index = e.currentTarget.dataset.index;

      historyBtns.forEach(el => {
        el.classList.remove('history-nav__btn--active')
      });

      e.currentTarget.classList.add('history-nav__btn--active')

      workSlider.slideTo(index);
    })
  })
}

const heroSlider = new Swiper('.hero-slider', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.hero__next',
    prevEl: '.hero__prev',
  },
  speed: heroSliderSpeed,
  autoplay: {
    delay: 1000,
  },
  pagination: {
    el: '.hero__pag',
    type: 'bullets',
    clickable: true,
  },
  on: {
    init: function () {
      const paginationBullets = document.querySelectorAll('.hero__pag .swiper-pagination-bullet');

      paginationBullets.forEach(el => {
        el.innerHTML = `<span class="hero__bar"></span>`
      })
    },
  },
});
