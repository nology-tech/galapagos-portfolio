
//initialising js for animations
const backgroundColor =  '#3C5870';
console.log('this code is running on launch');



// eslint-disable-next-line no-unused-vars
function initialiseAnimations(){
  animateElementById('menu-svg-bottom', 'svg');
  animateElementById('menu-svg-middle', 'svg');
  animateElementById('menu-svg-top', 'svg');
  animateElementById('skills-svg-bottom', 'svg');
  animateElementById('skills-svg-middle', 'svg');
  animateElementById('skills-svg-top', 'svg');
  animateElementById('portfolio-svg-bottom', 'svg');
  animateElementById('portfolio-svg-middle', 'svg');
  animateElementById('portfolio-svg-top', 'svg');
  animateElementById('portfolio-clicked-svg-bottom', 'svg');
  animateElementById('portfolio-clicked-svg-top', 'svg');
  animateElementById('contact-svg-bottom', 'svg');
  animateElementById('contact-svg-middle', 'svg');
  animateElementById('contact-svg-top', 'svg');
  animateElementById('welcome-text', 'text');
  animateElementById('skills-1', 'text');
  animateElementById('skills-2', 'text');
  animateElementById('skills-3', 'text');
  animateElementById('skills-4', 'text');
  animateElementById('skills-5', 'text');
  animateElementById('skills-6', 'text');
  animateElementById('contact-1', 'text');
  animateElementById('contact-2', 'text');
  animateElementById('contact-3', 'text');
}

function animateElementById(elemId, elemType){
  let element = document.getElementById(elemId);
  if (elemType==='svg'){   
    element.animate([
    // keyframes
      { transform: 'scale(1, 1)',offset:0 }, 
      {  transform: `scale(${((Math.random()*10) + 95)/100}, ${((Math.random()*10) + 95)/100}) translateY(${((Math.random()*10) + (-5))/100}%) translateX(${((Math.random()*10) + (-5))/100}%)`,offset:0.25 },
      {  transform: `scale(${((Math.random()*10) + 95)/100}, ${((Math.random()*10) + 95)/100}) translateY(${((Math.random()*10) + (-5))/100}%) translateX(${((Math.random()*10) + (-5))/100}%)`,offset:0.5 },
      {  transform: `scale(${((Math.random()*10) + 95)/100}, ${((Math.random()*10) + 95)/100}) translateY(${((Math.random()*10) + (-5))/100}%) translateX(${((Math.random()*10) + (-5))/100}%)`,offset:0.75 },
      {  transform: 'scale(1, 1)',offset:1 } 
    ], { 
    // timing options
      duration: 5000,
      iterations: Infinity,
    });
  }else{
    element.animate([
    // keyframes
      { transform: 'scale(1, 1)',offset:0 }, 
      {  transform: `skewX(${Math.random()*2}deg) rotate(${Math.random()*2}deg) translateY(${((Math.random()*10) + (-5))/100}%) translateX(${((Math.random()*10) + (-5))/100}%)`,offset:0.25 },
      {  transform: `skewX(${Math.random()*2}deg) rotate(${Math.random()*2}deg) translateY(${((Math.random()*10) + (-5))/100}%) translateX(${((Math.random()*10) + (-5))/100}%)`,offset:0.5 },
      {  transform: `skewX(${Math.random()*2}deg) rotate(${Math.random()*2}deg) translateY(${((Math.random()*10) + (-5))/100}%) translateX(${((Math.random()*10) + (-5))/100}%)`,offset:0.75 },
      {  transform: 'scale(1, 1)',offset:1 } 
    ], { 
    // timing options
      duration: 5000,
      iterations: Infinity,
    });
  }
}

// eslint-disable-next-line no-unused-vars
function menuButtonClick() {
  if(document.getElementById('container-class').style.display=='none'){
    menuItemClicked(0);
  } else {
    menuItemClicked(1);
  }
}

// eslint-disable-next-line no-unused-vars
function menuItemClicked(option){

  if(document.getElementById('portfolio-clicked').style.display === 'flex'){
    document.getElementById('portfolio-list').style.display = 'flex';
    document.getElementById('portfolio-p').style.display = 'unset';
    document.getElementById('portfolio-h2').style.display = 'unset';
    document.getElementById('portfolio-clicked').style.display = 'none';
  }

  let display1 = 'block';
  let display2 = 'none';
  let opacity = 0;
  let opacity2 = 0;
  let trans ='1s';

  if(option===1){
    display1 = 'none';
    display2 = 'flex';
    opacity = 0.5;
    opacity2 = 1;
    trans ='1.5s';
  }

  document.getElementById('container-class').style.display = display1;
  document.getElementById('menu-background').style.display = display2;
  document.getElementById('menu-svg-bottom').style.display = display2;
  document.getElementById('menu-svg-middle').style.display = display2;
  document.getElementById('menu-svg-top').style.display = display2;
  document.getElementById('menu-svg-bottom').style.opacity = opacity;
  document.getElementById('menu-svg-bottom').style.transition = trans;
  document.getElementById('menu-svg-middle').style.opacity = opacity;
  document.getElementById('menu-svg-middle').style.transition = trans;
  document.getElementById('menu-svg-top').style.opacity = opacity;
  document.getElementById('menu-svg-top').style.transition = trans;
  document.getElementById('menu-items').style.opacity = opacity2;
  document.getElementById('menu-items').style.transition = trans;

  if (option===1){
    document.getElementById('menu-button').style.webkitFilter = 'invert(37%) sepia(77%) saturate(928%) hue-rotate(215deg) brightness(99%) contrast(107%) drop-shadow( 1px 1px 1px ' + backgroundColor;
  }else{
    document.getElementById('menu-button').style.webkitFilter = 'invert(88%) sepia(5%) saturate(1399%) hue-rotate(185deg) brightness(104%) contrast(104%) drop-shadow( 1px 1px 1px ' + backgroundColor;
  }
}

// eslint-disable-next-line no-unused-vars
function portfolioClicked(portfolioNum){
  if(portfolioNum<4){
    document.getElementById('portfolio-list').style.display = 'none';
    document.getElementById('portfolio-p').style.display = 'none';
    document.getElementById('portfolio-h2').style.display = 'none';
    document.getElementById('portfolio-clicked').style.display = 'flex';
  }else {
    document.getElementById('portfolio-list').style.display = 'flex';
    document.getElementById('portfolio-p').style.display = 'unset';
    document.getElementById('portfolio-h2').style.display = 'unset';
    document.getElementById('portfolio-clicked').style.display = 'none';
  }

  switch(portfolioNum) {
  case 1:
    //document.getElementById('portfolio-clicked-svg-top').style.fill = 'url:("./assets/stockphoto1.jpg")';
    break;
  case 2:
    //document.getElementById('portfolio-clicked-svg-top').style.fill = 'red';
    break;
  case 3:
    //document.getElementById('portfolio-clicked-svg-top').style.fill = 'url(./assets/stockphoto3.jpg)';
    break;
  default:
  }
}
