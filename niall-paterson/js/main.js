import { drawColorToggle } from './drawColorModeToggle.js';
import { drawMenuToggle } from './drawMenuToggle.js';
import { settings } from './settings.js';
import { toggleMenuVisibility } from './toggleMenu.js';

window.onload = () => {

  drawMenuToggle(settings);
  drawColorToggle(settings);

  document.querySelectorAll('a').forEach(element => {
    element.addEventListener('click', () => {
      toggleMenuVisibility(settings);
    });
  });
};
