import { settings } from './settings.js';

const lightGradientTop = 'linear-gradient(180deg, rgba(255,255,255,1) 70%, rgba(255,255,255,0.1) 100%)';
const lightGradientBottom = 'linear-gradient(0deg, rgba(255,255,255,1) 70%, rgba(255,255,255,0.1) 100%)';
const darkGradientTop = 'linear-gradient(180deg, rgba(0,0,0,1) 70%, rgba(0,0,0,0.1) 100%)';
const darkGradientBottom = 'linear-gradient(0deg, rgba(0,0,0,1) 70%, rgba(0,0,0,0.1) 100%)';

export const toggleGradient = function () {
  console.log(document.querySelector('#fixed-footer'));
  if (settings.colorMode === 'light') {
    document.querySelector('#fixed-header')
      .style.background = darkGradientTop;

    document.querySelector('#fixed-footer')
      .style.background = darkGradientBottom;
  } else {

    document.querySelector('#fixed-header')
      .style.background = lightGradientTop;

    document.querySelector('#fixed-footer')
      .style.background = lightGradientBottom;
  }
};
