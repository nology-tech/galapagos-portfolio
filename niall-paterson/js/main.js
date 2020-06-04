// import { drawColorToggle } from './drawColorModeToggle.js';
import { drawMenuToggle } from './drawMenuToggle.js';
import { settings } from './settings.js';
import { toggleMenuVisibility } from './toggleMenu.js';
import { toggleButton } from './drawColorModeToggle.js';

window.onload = () => {

  drawMenuToggle(settings);
  
  toggleButton.drawFrame().drawBevel().drawButton().addAnimateClickListener(settings);
  
  document.querySelectorAll('a').forEach(element => {
    element.addEventListener('click', () => {
      toggleMenuVisibility(settings);
    });
  });
};
