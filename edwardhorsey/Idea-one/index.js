const toggle = () => {
  let navBarClasses = document.getElementById('nav-bar');
console.log(navBarClasses)
  if (navBarClasses.classList.contains("show")) {
    navBarClasses.classList.remove("show");
  } else {
    navBarClasses.classList.add("show");
  }
}

const boxFocus = (id) => {
  console.log(id); // for info
  // list of boxes (could probs use queryselectorall to find these..)
  let boxes = Array.from(document.getElementsByClassName('box')).map(e=>{return e.id});
  // ['boxOne', 'boxTwo', 'boxThree', 'boxFour'];

  // remove existing styles
  boxes.forEach(e=>{
    document.getElementById(e).classList.remove('focus');
    document.getElementById(e).classList.remove('sub');
    document.getElementById(e).style.order = '';
    if (e===id){
      document.getElementById(e).classList.add('focus');
      document.getElementById(e).style.order = '-3';
    } else {
    document.getElementById(e).classList.add('sub');
    }
  });

  // // locate chosen box & resize chosen box
  // boxes.splice(boxes.indexOf(String(id)), 1);
  // document.getElementById(id).classList.add('focus');
  // document.getElementById(id).style.order = '-3';
  // // resize remaining boxes
  // boxes.forEach(e=>{
  //   // console.log(e);
  //   document.getElementById(e).classList.add('sub');
  // });

}
