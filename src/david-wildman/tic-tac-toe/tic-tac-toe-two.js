let turn = 0;

// const checkWin = () => {};

// 1. Click event on every square to add either a O or a X.
const clickEvent = (event) => {
  if (event.target.innerHTML !== '') return; // don't run the rest of the code
  event.target.innerHTML = turn % 2 === 0 ? 'X' : 'O';
  turn++;
  checkwin();
};

const addEventListeners = () => {
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => square.addEventListener('click', clickEvent));
};

addEventListeners();

//  - Select the squares from the page
//  - Loop over all the squares
//  - Add click event
//  - If the box is empty
//         If turn is odd, add X otherwise add O.

//  Variables
//  - Two users, X and O and their moves
//  - Turn counter

// 2. Win logic
//      - If there are three in line (either horizontal, vertical or diagonal), current user won
//      - Add one to the score of the current user

// 3. Reset/control starting the game (the trigger)
