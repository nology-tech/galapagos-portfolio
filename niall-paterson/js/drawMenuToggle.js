import { toggleMenuVisibility } from './toggleMenu.j';

export const drawMenuToggle = (settings) => {

  const menuSVG = SVG().addTo('#menu-toggle').size(75, 75);
  
  const lineTop = menuSVG.line(25, 50, 50, 50);
  const lineMid = menuSVG.line(25, 60, 50, 60);
  const lineBot = menuSVG.line(25, 70, 50, 70);

  lineTop.stroke({ color: 'black', width: 2, linecap: 'round' });
  lineMid.stroke({ color: 'black', width: 2, linecap: 'round' });
  lineBot.stroke({ color: 'black', width: 2, linecap: 'round' });

  menuSVG.click( () => {
    if (settings.menuVisible) {
      lineTop.animate(400).plot([[25, 50], [50, 50]]);
      lineMid.animate(300, 200).plot([[25, 60], [50, 60]]);
      lineBot.animate(400).plot([[25, 70], [50, 70]]);

      toggleMenuVisibility(settings);

    } else {
      lineTop.animate(400).plot([[27.5, 70], [47.5, 50]]);
      lineMid.animate(300).plot([[37.5, 60], [37.5, 60]]);
      lineBot.animate(400).plot([[27.5, 50], [47.5, 70]]);

      toggleMenuVisibility(settings);
    }
  });
};


