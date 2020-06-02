import { toggleMenuVisibility } from './toggleMenu.js';

/* global SVG */

export const drawMenuToggle = (settings) => {

  const menuSVG = SVG().addTo('#menu-toggle').size(50, 50);
  
  const lineTop = menuSVG.line(10, 20, 40, 20);
  const lineBot = menuSVG.line(10, 35, 40, 35);

  lineTop.stroke({ color: 'black', width: 2, linecap: 'round' });
  lineBot.stroke({ color: 'black', width: 2, linecap: 'round' });

  menuSVG.click( () => {
    if (settings.menuVisible) {
      lineTop.
      animate(400, 0, "now").plot([[12, 15], [38, 27]])
      .animate(1000, 100, "after").plot([[10, 20], [40, 20]]);

      lineBot
      .animate(400, 100, "now").plot([[38, 20], [12, 35]])
      .animate(1000, 100, "after").plot([[10, 35], [40, 35]]);

      toggleMenuVisibility(settings);

    } else {
      lineTop
      .animate(400, 0, "now").plot([[12, 15], [38, 27]])
      .animate(1000, 100, "after").plot([[37.5, 12.5], [12.5, 37.5]]);

      lineBot
      .animate(400, 0, "now").plot([[38, 20], [12, 35]])
      .animate(1000, 100, "after").plot([[12.5, 12.5], [37, 37.5]]);

      toggleMenuVisibility(settings);
    }
  });
};

