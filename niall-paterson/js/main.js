import { toggleColor } from './toggleColor.js';
import { toggleGradient } from './toggleGradient.js';
import { updateSettings } from './settings.js';
import { toggleMenu } from './toggleMenu.js';

window.onload = () => {
  document.getElementById('colorToggle').addEventListener('click', () => {
    toggleColor();
    toggleGradient();
    updateSettings();
  });

  document.querySelectorAll('#menuToggle, a').forEach(element => {
    element.addEventListener('click', () => {
      toggleMenu();
    });
  });
};
