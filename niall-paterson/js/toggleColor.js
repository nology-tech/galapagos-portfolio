import { settings } from './settings.js';

const colorToggleBtn = document.querySelector('#colorToggle');
const menuToggleBtn = document.querySelector('#menuToggle');

export const toggleColor = function () {
  document.querySelectorAll('*').forEach(element => {
    if (settings.colorMode === 'light') {
      element.style.backgroundColor = 'black';
      element.style.color = 'white';
    } else {
      element.style.backgroundColor = '';
      element.style.color = 'black';
    }
  });

  if (colorToggleBtn.src.includes('light')) {
    colorToggleBtn.src = './assets/toggle-dark.svg';
  } else {
    colorToggleBtn.src = './assets/toggle-light.svg';
  }

  if (menuToggleBtn.src.includes('light')) {
    menuToggleBtn.src = './assets/hamburger-dark.svg';
  } else {
    menuToggleBtn.src = './assets/hamburger-light.svg';
  }
};