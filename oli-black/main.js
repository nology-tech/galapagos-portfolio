//menu button click

const backgroundColor =  '#3C5870';

// eslint-disable-next-line no-unused-vars
function menuButtonClick() {
  console.log('button was clicked');

  if(document.getElementById('container-class').style.display=='none'){
    // enableScrolling();

    document.getElementById('menu-background').style.display='none';
    document.getElementById('menu-svg-bottom').style.display='none';
    document.getElementById('menu-svg-middle').style.display='none';
    document.getElementById('menu-svg-top').style.display='none';

    document.getElementById('menu-svg-bottom').style.opacity = 0;
    document.getElementById('menu-svg-bottom').style.transition = '1s';
    document.getElementById('menu-svg-middle').style.opacity = 0;
    document.getElementById('menu-svg-middle').style.transition = '1s';
    document.getElementById('menu-svg-top').style.opacity = 0;
    document.getElementById('menu-svg-top').style.transition = '1s';
    document.getElementById('menu-items').style.opacity = 0;
    document.getElementById('menu-items').style.transition = '1s';

    document.getElementById('container-class').style.display='block';


    document.getElementById('menu-button').style.webkitFilter = 'invert(88%) sepia(5%) saturate(1399%) hue-rotate(185deg) brightness(104%) contrast(104%) drop-shadow( 1px 1px 1px ' + backgroundColor;
  } else {

    // disableScrolling();

    document.getElementById('menu-background').style.display='flex';
    document.getElementById('menu-svg-bottom').style.display='flex';
    document.getElementById('menu-svg-middle').style.display='flex';
    document.getElementById('menu-svg-top').style.display='flex';


    document.getElementById('menu-svg-bottom').style.opacity = 0.5;
    document.getElementById('menu-svg-bottom').style.transition = '1.5s';
    document.getElementById('menu-svg-middle').style.opacity = 0.5;
    document.getElementById('menu-svg-middle').style.transition = '1.5s';
    document.getElementById('menu-svg-top').style.opacity = 1;
    document.getElementById('menu-svg-top').style.transition = '1.5s';
    document.getElementById('menu-items').style.opacity = 1;
    document.getElementById('menu-items').style.transition = '1.5s';

    document.getElementById('container-class').style.display='none';


    document.getElementById('menu-button').style.webkitFilter = 'invert(37%) sepia(77%) saturate(928%) hue-rotate(215deg) brightness(99%) contrast(107%) drop-shadow( 1px 1px 1px ' + backgroundColor;
  }
}


// eslint-disable-next-line no-unused-vars
function menuItemClicked(){

  document.getElementById('container-class').style.display='block';

  document.getElementById('menu-background').style.display='none';
  document.getElementById('menu-svg-bottom').style.display='none';
  document.getElementById('menu-svg-middle').style.display='none';
  document.getElementById('menu-svg-top').style.display='none';

  document.getElementById('menu-svg-bottom').style.opacity = 0;
  document.getElementById('menu-svg-bottom').style.transition = '1s';
  document.getElementById('menu-svg-middle').style.opacity = 0;
  document.getElementById('menu-svg-middle').style.transition = '1s';
  document.getElementById('menu-svg-top').style.opacity = 0;
  document.getElementById('menu-svg-top').style.transition = '1s';
  document.getElementById('menu-items').style.opacity = 0;
  document.getElementById('menu-items').style.transition = '1s';

  document.getElementById('menu-button').style.webkitFilter = 'invert(88%) sepia(5%) saturate(1399%) hue-rotate(185deg) brightness(104%) contrast(104%) drop-shadow( 1px 1px 1px ' + backgroundColor;
}

