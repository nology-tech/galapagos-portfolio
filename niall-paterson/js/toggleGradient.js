import { settings } from './settings.js';

export const toggleGradient = function () {

  if (settings.colorMode === 'light') {
    document.querySelector('#fixed-header')
      .style.background = 'linear-gradient(180deg, rgba(31, 31, 31, 1) 80%, rgba(31, 31, 31, 0.1) 100%)';
  } else {
    document.querySelector('#fixed-header')
      .style.background = 'linear-gradient(180deg, rgba(251, 254, 249, 1) 80%, rgba(251, 254, 249, 0.1) 100%)';
  }
};
