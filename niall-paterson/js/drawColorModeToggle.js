import { toggleGradient } from './toggleGradient.js';
import { settings, updateSettings } from './settings.js';
import { toggleColorMode } from './toggleColorMode.js';

/* global SVG */

const colorToggleSVG = SVG().addTo('#color-toggle').size(50, 50);
const toggleBevel = colorToggleSVG.rect(40, 20).center(25, 25).radius(10).attr({ fill: '#1F1F1F' });
export const toggleButton = colorToggleSVG.circle(16).center(15, 25).attr({ fill: '#FBFEF9' });

export const toggleColours = (toggleButton, settings) => {
  if (settings.colorMode === 'dark') {
  toggleButton
    .animate(100, 100, "now").size(40)
    .animate(250, 0, "after").size(10)
    .animate(300, 0, "after").size(16)
    .animate(300, 0, "after").center(15, 25);

  setTimeout(toggleColorMode, 100);
  setTimeout(toggleGradient, 100);
  setTimeout(updateSettings, 1000);
} else {
  toggleButton.animate(300, 0, "now").center(35, 25)
    .animate(100, 100, "after").size(40)
    .animate(250, 0, "after").size(10)
    .animate(300, 0, "after").size(16);

  setTimeout(toggleColorMode, 400);
  setTimeout(toggleGradient, 400);
  setTimeout(updateSettings, 1000);
}
};

colorToggleSVG.click(() => {
  toggleColours(toggleButton, settings);
});


