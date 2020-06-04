//menu button click

const primaryColor = '#6C63FF';
const secondaryColor ='#ABDCFF';

// eslint-disable-next-line no-unused-vars
function menuButtonClick() {
  console.log('button was clicked');

  if(document.getElementById('welcome-text').style.visibility=='hidden'){
    enableScrolling();

    document.getElementById('menu-svg-bottom').style.visibility='hidden';
    document.getElementById('menu-svg-middle').style.visibility='hidden';
    document.getElementById('menu-svg-top').style.visibility='hidden';

    document.getElementById('menu-svg-bottom').style.opacity = 0;
    document.getElementById('menu-svg-bottom').style.transition = '1s';
    document.getElementById('menu-svg-middle').style.opacity = 0;
    document.getElementById('menu-svg-middle').style.transition = '1s';
    document.getElementById('menu-svg-top').style.opacity = 0;
    document.getElementById('menu-svg-top').style.transition = '1s';
    document.getElementById('menu-items').style.opacity = 0;
    document.getElementById('menu-items').style.transition = '1s';

    document.getElementById('welcome-text').style.visibility='visible';
    document.getElementById('welcome-text').style.opacity = 1;
    document.getElementById('welcome-text').style.transition = '1s';

    document.getElementById('skills-background').style.visibility='visible';
    document.getElementById('skills-background').style.opacity = 1;
    document.getElementById('skills-background').style.transition = '1s';

    document.getElementById('portfolio-background').style.visibility='visible';
    document.getElementById('portfolio-background').style.opacity = 1;
    document.getElementById('portfolio-background').style.transition = '1s';

    document.getElementById('contact-background').style.visibility='visible';
    document.getElementById('contact-background').style.opacity = 1;
    document.getElementById('contact-background').style.transition = '1s';

    document.getElementById('menu-button').style.webkitFilter = 'invert(88%) sepia(5%) saturate(1399%) hue-rotate(185deg) brightness(104%) contrast(104%) drop-shadow( 3px 3px 2px ' + primaryColor;
  } else {

    disableScrolling();

    document.getElementById('menu-svg-bottom').style.visibility='visible';
    document.getElementById('menu-svg-middle').style.visibility='visible';
    document.getElementById('menu-svg-top').style.visibility='visible';


    document.getElementById('menu-svg-bottom').style.opacity = 0.5;
    document.getElementById('menu-svg-bottom').style.transition = '1.5s';
    document.getElementById('menu-svg-middle').style.opacity = 0.5;
    document.getElementById('menu-svg-middle').style.transition = '1.5s';
    document.getElementById('menu-svg-top').style.opacity = 1;
    document.getElementById('menu-svg-top').style.transition = '1.5s';
    document.getElementById('menu-items').style.opacity = 1;
    document.getElementById('menu-items').style.transition = '1.5s';
     
    document.getElementById('welcome-text').style.visibility='hidden';
    document.getElementById('welcome-text').style.opacity = 0;
    document.getElementById('welcome-text').style.transition = '0.3s';

    document.getElementById('skills-background').style.visibility='hidden';
    document.getElementById('skills-background').style.opacity = 0;
    document.getElementById('skills-background').style.transition = '0.3s';

    document.getElementById('portfolio-background').style.visibility='hidden';
    document.getElementById('portfolio-background').style.opacity = 0;
    document.getElementById('portfolio-background').style.transition = '0.3s';

    document.getElementById('contact-background').style.visibility='hidden';
    document.getElementById('contact-background').style.opacity = 0;
    document.getElementById('contact-background').style.transition = '0.3s';

    document.getElementById('menu-button').style.webkitFilter = 'invert(37%) sepia(77%) saturate(928%) hue-rotate(215deg) brightness(99%) contrast(107%) drop-shadow( 0px 0px 2px ' + secondaryColor;
  }
}

function disableScrolling(){
  var x=window.scrollX;
  var y=window.scrollY;
  window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
  window.onscroll=function(){};
}

// eslint-disable-next-line no-unused-vars
function menuItemClicked(){
  enableScrolling();

  document.getElementById('menu-svg-bottom').style.visibility='hidden';
  document.getElementById('menu-svg-middle').style.visibility='hidden';
  document.getElementById('menu-svg-top').style.visibility='hidden';

  document.getElementById('menu-svg-bottom').style.opacity = 0;
  document.getElementById('menu-svg-bottom').style.transition = '1s';
  document.getElementById('menu-svg-middle').style.opacity = 0;
  document.getElementById('menu-svg-middle').style.transition = '1s';
  document.getElementById('menu-svg-top').style.opacity = 0;
  document.getElementById('menu-svg-top').style.transition = '1s';
  document.getElementById('menu-items').style.opacity = 0;
  document.getElementById('menu-items').style.transition = '1s';

  document.getElementById('welcome-text').style.visibility='visible';
  document.getElementById('welcome-text').style.opacity = 1;
  document.getElementById('welcome-text').style.transition = '1s';

  document.getElementById('skills-background').style.visibility='visible';
  document.getElementById('skills-background').style.opacity = 1;
  document.getElementById('skills-background').style.transition = '1s';

  document.getElementById('portfolio-background').style.visibility='visible';
  document.getElementById('portfolio-background').style.opacity = 1;
  document.getElementById('portfolio-background').style.transition = '1s';

  document.getElementById('contact-background').style.visibility='visible';
  document.getElementById('contact-background').style.opacity = 1;
  document.getElementById('contact-background').style.transition = '1s';

  document.getElementById('menu-button').style.webkitFilter = 'invert(88%) sepia(5%) saturate(1399%) hue-rotate(185deg) brightness(104%) contrast(104%) drop-shadow( 3px 3px 2px ' + primaryColor;
}

