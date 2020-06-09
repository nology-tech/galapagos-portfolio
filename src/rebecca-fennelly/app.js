const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener ('click',() => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
  toggleMenu();
});

const toggleMenu = () => {
  let mainNav= document.getElementsByClassName('hide')[0];
  console.log(mainNav);
  if (mainNav.classList.contains ('show')) {
    mainNav.classList.remove ('show');
  } else {
    mainNav.classList.add('show');
  }
}


// toggleMenu();
;




