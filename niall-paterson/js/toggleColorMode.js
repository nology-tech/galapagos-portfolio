import { settings } from './settings.js';

export const toggleColorMode = function () {
  
  const toggleBevel = document.querySelector('#color-toggle > svg > rect');
  const toggleButton = document.querySelector('#color-toggle > svg > circle');
  const menuToggle = document.querySelectorAll('#menu-toggle > svg > line');

  document.querySelectorAll('*').forEach(element => {
    if (settings.colorMode === 'light') {
      element.style.backgroundColor = '#1F1F1F';
      element.style.fill = '#FBFEF9';
      element.style.color = '#FBFEF9';
    } else {
      element.style.backgroundColor = '';
      element.style.fill = '#1F1F1F';
      element.style.color = '#1F1F1F';
    }
  });
};