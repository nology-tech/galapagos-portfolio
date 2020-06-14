import { settings } from './settings.js';
import { toggleButton } from './drawColorModeToggle.js';
import { toggleMenu } from './drawMenuToggle.js';

export const toggleColorMode = () => {

  console.log(toggleButton);
  // we do backgrounds and colors separately, since some
  // elements have transparent backgrounds

  document.querySelectorAll('*').forEach((element) => {
    if (element.classList.contains('lightModeText')) {
      element.classList.remove('lightModeText');
      element.classList.add('darkModeText');
    } else if (element.classList.contains('darkModeText')) {
      element.classList.remove('darkModeText');
      element.classList.add('lightModeText');
    }

    if (element.classList.contains('lightModeBackground')) {
      element.classList.remove('lightModeBackground');
      element.classList.add('darkModeBackground');
    } else if (element.classList.contains('darkModeBackground')){
      element.classList.remove('darkModeBackground');
      element.classList.add('lightModeBackground');
    }

    if (element.classList.contains('lightModeBoxShadow')) {
      element.classList.remove('lightModeBoxShadow');
      element.classList.add('darkModeBoxShadow');
    } else if (element.classList.contains('darkModeBoxShadow')){
      element.classList.remove('darkModeBoxShadow');
      element.classList.add('lightModeBoxShadow');
    }

  });


  // svgs

  if (settings.colorMode === 'light') {
    toggleButton.bevel.fill('#fbfef9');
    toggleButton.button.fill('#1f1f1f').stroke('#fbfef9');
    toggleMenu.lineTop.stroke('#fbfef9');
    toggleMenu.lineBot.stroke('#fbfef9');
  } else {
    toggleButton.bevel.fill('#1f1f1f');
    toggleButton.button.fill('#fbfef9').stroke('#1f1f1f');
    toggleMenu.lineTop.stroke('#1f1f1f');
    toggleMenu.lineBot.stroke('#1f1f1f');
  }

};
