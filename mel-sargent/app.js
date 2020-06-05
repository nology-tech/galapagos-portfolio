// document.querySelector('burger').addEventListener('click', function expand() {
//   alert (this works Mel!);
// });

const expand = (x) => {
  x.classList.toggle('change');
  const mainNav = document.getElementById('dropdown');
  mainNav.classList.toggle('show');
};

// AOS.init({
//   duration: 1200
// });

// function expand(x) {
// x.classList.toggle('change');
// const mainNav = document.getElementById('dropdown');
// mainNav.classList.toggle('show');
// }

// const menu = document.getElementById('burger');
// menu.onclick = function expand(x) {
// x.classList.toggle('change');
// const mainNav = document.getElementById('dropdown');
// mainNav.classList.toggle('show');
// };


// const menu = document.getElementsByClassName('burger');
// menu.onclick = expand = (x) => {
// x.classList.toggle('change');
// };

// const mainNav = document.getElementById('dropdown');
// mainNav.classList.toggle('show');

// document.getElementsByClassName('burger').addEventListener('click', const expand = (x) => {
// x.classList.toggle('change');
// });
