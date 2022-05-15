const bodyStyles = window.getComputedStyle(document.body);
export const gap = parseInt(bodyStyles.getPropertyValue('--grid-gap'));

export default {
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  bodyStyles: bodyStyles,
  gap: gap,
}

