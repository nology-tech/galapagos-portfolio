const toggle = () => {
  let navBarClasses = document.getElementById('nav-bar');
  // console.log(navBarClasses);
  if (navBarClasses.classList.contains('show')) {
    navBarClasses.classList.remove('show');
  } else {
    navBarClasses.classList.add('show');
  }
};

document.getElementById('burger').addEventListener('click', () => {
  toggle();
});

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

const boxFocus = (id) => {

  let boxes = Array.from(document.getElementsByClassName('box')).map(e=>{return e.id;});
  // ['boxOne', 'boxTwo', 'boxThree', 'boxFour'];

  boxes.forEach(e=>{
    let media = window.matchMedia('(min-width: 800px)');
    document.getElementById(e).classList.remove('focus');
    document.getElementById(e).classList.remove('sub');
    document.getElementById(e).style.order = '';
    if (media.matches){
      if (e===id){
        document.getElementById(e).classList.add('focus');
        document.getElementById(e).style.order = `-${boxes.indexOf(e)}`;
        typeWriter(`${id}P`, 15);
      } else {
        document.getElementById(e).classList.add('sub');
      }
    }
  });
};

document.getElementById('boxOne').addEventListener('click', () => {
  boxFocus('boxOne');
});
document.getElementById('boxTwo').addEventListener('click', () => {
  boxFocus('boxTwo');
});
document.getElementById('boxThree').addEventListener('click', () => {
  boxFocus('boxThree');
});
document.getElementById('boxFour').addEventListener('click', () => {
  boxFocus('boxFour');
});
document.getElementById('boxFive').addEventListener('click', () => {
  boxFocus('boxFive');
});
document.getElementById('boxSix').addEventListener('click', () => {
  boxFocus('boxSix');
});

// document.getElementById('submit').addEventListener('click', (e)=>{
//   e.preventDefault();
// });

const theYear = new Date;
document.getElementById('year').innerHTML = `${theYear.getFullYear()}`;