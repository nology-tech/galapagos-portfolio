document.getElementById('burger').addEventListener('click', e => {

})

const toggle = () => {
  let navBarClasses = document.getElementById('nav-bar');
  // console.log(navBarClasses);
  if (navBarClasses.classList.contains('show')) {
    navBarClasses.classList.remove('show');
  } else {
    navBarClasses.classList.add('show');
  }
};

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
    document.getElementById(e).classList.remove('focus');
    document.getElementById(e).classList.remove('sub');
    document.getElementById(e).style.order = '';
    if (e===id){
      document.getElementById(e).classList.add('focus');
      document.getElementById(e).style.order = `-${boxes.indexOf(e)}`;
      typeWriter(`${id}P`, 25);
    } else {
      document.getElementById(e).classList.add('sub');
    }
  });
};

document.getElementById('submit').addEventListener('click', (e)=>{
  e.preventDefault();
});

const theYear = new Date;
document.getElementById('year').innerHTML = `${theYear.getFullYear()}`;