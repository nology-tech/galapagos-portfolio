import { toggleGradient } from './toggleGradient.js';
import { updateSettings } from './settings.js';
import { toggleColorMode } from './toggleColorMode.js';

/* global SVG */

export const drawColorToggle = (settings) => {
  const colorToggleSVG = SVG().addTo('#color-toggle').size(75, 75);
  const toggleBevel = colorToggleSVG.rect(40, 20).move(30, 45).radius(10).attr({ fill: 'black' });
  const toggleButton = colorToggleSVG.circle(16).move(32.5, 47).attr({ fill: 'white' });

  colorToggleSVG.click(() => {
    if (settings.colorMode === 'dark') {
      toggleButton.animate(300).ease('<>').move(32.5, 47);
      
      toggleButton.attr({ fill: 'white' });
      toggleBevel.attr({ fill: 'black' });
      toggleColorMode();
      toggleGradient();
      updateSettings();
    } else {
      toggleButton.animate(300).ease('<>').move(52.5, 47);
      toggleButton.attr({ fill: 'black' });
      toggleBevel.attr({ fill: 'white' });
      toggleColorMode();
      toggleGradient();
      updateSettings();
    }
  });
};
