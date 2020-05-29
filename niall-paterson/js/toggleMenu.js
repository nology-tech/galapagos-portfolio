import { settings } from './settings.js';

export const toggleMenu = function() {
  if (settings.menu === 'off') {
    document.querySelector('nav').style.display = 'block';
    settings.menu = 'on';
  } else {
    document.querySelector('nav').style.display = 'none';
    settings.menu = 'off';
  }
};