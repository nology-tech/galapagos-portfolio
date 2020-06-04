import { settings } from './settings.js';

export const toggleColorMode = function () {
  // all elements
  document.querySelectorAll('*').forEach(element => {
    if (settings.colorMode === 'light') {
      element.style.backgroundColor = '#1F1F1F';
      element.style.fill = '#FBFEF9';
      element.style.color = '#FBFEF9';
      element.style.stroke = '#FBFEF9'; // for line elements
    } else {
      element.style.backgroundColor = '';
      element.style.fill = '#1F1F1F';
      element.style.color = '#1F1F1F';
      element.style.stroke = '#1F1F1F'; // ditto
    }
  });

  // svg button element
  const toggleButton = document.querySelector('#color-toggle > svg > circle');
  settings.colorMode === 'light' ? toggleButton.style.fill = '#1F1F1F' : toggleButton.style.fill = '#FBFEF9';
};
