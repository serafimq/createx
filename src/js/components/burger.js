const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const overlay = document.querySelector('.overlay');


const disScroll = () => {
  let t = window.scrollY;
  document.body.classList.add("dis-scroll");
  document.body.dataset.position = t;
  document.body.style.top = -t + "px";
}

const enScroll = () => {
  let t = parseInt(document.body.dataset.position, 10);
  document.body.style.top = "auto";
  document.body.classList.remove("dis-scroll");
  window.scroll({ top: t, left: 0 });
  document.body.removeAttribute("data-position")
}

burger.addEventListener('click', (e) => {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');
  overlay.classList.toggle('overlay--active');

  if (!burger.classList.contains('burger--active')) {
    enScroll();
  } else {
    disScroll();
  }
})
