// import { drawColorToggle } from './drawColorModeToggle.js';
import { toggleMenu } from './drawMenuToggle.js';
import { settings } from './settings.js';
import { toggleButton } from './drawColorModeToggle.js';

window.onload = () => {
  toggleButton.drawFrame().drawBevel().drawButton().addAnimateClickListener(settings);
  toggleMenu.drawFrame().drawLineTop().drawLineBot().addAnimateClickListeners(settings);
};
