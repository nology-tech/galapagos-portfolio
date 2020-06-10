console.log('HELLO');
let turn = 0;

// CLICK EVENTS //

// Looping over the squares to add an event listener //
// Clicking on every square adds  either a 0 or an X //

// every = need a loop over all the squares //

// If a box is clicked //
// If a box has been clicked //
// if turn is 2, 4 or 6, add X otherwise 0 //

// Two users, X and 0, and their moves //
// const addEventListeners = () => {
//   const squares = document.getElementsByClassName('square');
//   squares.forEach((square) => {
//     square.addEventListener('click', () => {
//       if (square.innerHTML === '') {
//         if (turn % 2 === 0) {
//           square.innerHTML = 'X';
//         } else {
//           square.innerHTML = '0';
//         }
//       }
//       turn++;
//     });
//   });
// };

// const squares = document.querySelectorAll('.square');

// console.log(squares);

// squares.forEach((square) => {
//   square.addEventListener('click', () => {
//     console.log('click');
//   });
// });

// Turn counter //

// 2. WIN LOGIC //
// If there are three in line - | / \ current user has won //
// add one to the current user //

// 3. RESET //
// Trigger to start the whole game //
