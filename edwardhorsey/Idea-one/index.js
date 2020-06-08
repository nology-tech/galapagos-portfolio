// Bugrer Toggle
const toggle = () => {
  let navBarClasses = document.getElementById('nav-bar');
  if (navBarClasses.classList.contains('show')) {
    navBarClasses.classList.remove('show');
  } else {
    navBarClasses.classList.add('show');
  }
};

document.getElementById('burger').addEventListener('click', () => {
  toggle();
});

// TypeWriter
const typeWriter = (id, ms=50) => {
  let store = document.getElementById(id).innerHTML;
  document.getElementById(id).innerHTML = '';

  let i=0;

  function typing() {
    if (i < store.length) {
      document.getElementById(id).innerHTML += store[i];
      i++;
      setTimeout(typing,ms);
    }
  }
  typing();
};

document.querySelector('body').addEventListener('load', typeWriter('ed-span'));

// Project Boxes Moving
const allTheBoxes = Array.from(document.getElementsByClassName('box')).map(e=>{return e.id;});

const boxFocus = (id) => {
  let boxes = allTheBoxes;
  boxes.forEach( box => {
    let media = window.matchMedia('(min-width: 800px)');
    document.getElementById(box).classList.remove('focus');
    document.getElementById(box).classList.remove('sub');
    document.getElementById(box).style.order = '';
    if (media.matches){
      if (box === id){
        document.getElementById(box).style.order = `-${boxes.indexOf(box)}`;
        document.getElementById(box).classList.add('focus');
      } else {
        document.getElementById(box).classList.add('sub');
      }
    }
  });
};

// Add event listeners

allTheBoxes.forEach(box=>{
  document.getElementById(box).addEventListener('click', () => {
    boxFocus(box);
  });
});

// Put the year in the footer

const theYear = new Date;
document.getElementById('year').innerHTML = `${theYear.getFullYear()}`;