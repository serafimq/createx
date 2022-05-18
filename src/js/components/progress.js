// const circle = document.querySelector('.progress')
//
// const progressAnimation = () => {
//   let percentProgress = Math.floor(94);
//
//   let radius = circle.getAttribute('r');
//   let circleLength = 2 * Math.PI * radius;
//   circle.setAttribute('stroke-dasharray', circleLength);
//   circle.setAttribute('stroke-dashoffset', circleLength - circleLength * percentProgress / 100);
// }
//
// progressAnimation()

const circles = document.querySelectorAll('.facts-element__circle')

circles.forEach(el => {
  let progress = el.querySelector('.progress');
  let value = el.querySelector('.facts-element__value')
  let radius = progress.getAttribute('r');
  let circleLength = 2 * Math.PI * radius;
  progress.setAttribute('stroke-dasharray', circleLength);
  if (el.dataset.percentage === '') {
    let percent = el.dataset.value;
    let total = el.dataset.full;
    progress.setAttribute('stroke-dashoffset', circleLength - circleLength * percent / total);
    value.textContent = percent;
  } else {
    let percent = el.dataset.percent
    let percentProgress = Math.floor(percent);
    value.textContent = percent + '%';
    progress.setAttribute('stroke-dashoffset', circleLength - circleLength * percentProgress / 100);
  }
})
