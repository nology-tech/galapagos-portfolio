import { settings } from './settings.js';

export const toggleColorMode = function () {

  document.querySelectorAll('*').forEach(element => {
    if (settings.colorMode === 'light') {
      element.style.backgroundColor = 'black';
      element.style.fill = 'white';
      element.style.color = 'white';
    } else {
      element.style.backgroundColor = '';
      element.style.fill = 'black';
      element.style.color = 'black';
    }
  });

  const toggleBevel = document.querySelector('#color-toggle > svg > rect');
  const toggleButton = document.querySelector('#color-toggle > svg > circle');
  const menuToggle = document.querySelectorAll('#menu-toggle > svg > line');
  console.log(menuToggle);
  if (settings.colorMode === 'light') {
    toggleBevel.style.fill = 'white';
    toggleButton.style.fill = 'black';
    menuToggle.forEach(line => {
      line.style.stroke = 'white';
    });
  } else {
    toggleBevel.style.fill = 'black';
    toggleButton.style.fill = 'white';
    menuToggle.forEach(line => {
      line.style.stroke = 'black';
    });
  }
};