import * as modalFunctionFile from './modalHTML.js';
import * as dataFile from './data.js';

// 1. Grab Items
const portfolioGrid = document.querySelector('#portfolio .items');
const portfolioItems = document.querySelectorAll('#portfolio .item');
const modalContent = document.querySelector('#simpleModal .modal-content');

console.log(portfolioGrid);
const projectList = document.querySelector('#portfolio .items');
// ----------------------------------------------------------------
// STEP 1 - AUTO-RENDER THE PROJECT BUTTONS USING 'DATA.JS' FILE.
const buttons = dataFile.data.map((project, index) => {
  return `
  <button class="item" value="${index}">
    <h4>${project.name}</h4>
  </button>`;
});
projectList.innerHTML += buttons.join('');
// projectList.innerHTML +=

// STEP 2 - WHEN PROJECT BUTTON PRESSED, RUN THE MODAL DISPLAY FUNCTION TAKING IN THE BUTTON NUMBER PRESSED AS AN ARG.
// 3. Event Handler
const modalOpen = event => {
  const buttonClicked = event.target.value;
  console.log(`it reached inside Event Handler - ${buttonClicked}`);
  switch (buttonClicked) {
    case '0':
      console.log(`it reached inside SWITCH - ${buttonClicked}`);
      modalFunctionFile.insertProjectModalFunction(0);
      break;
    case '1':
      console.log(`it reached inside SWITCH - ${buttonClicked}`);
      modalFunctionFile.insertProjectModalFunction(1);
      break;
    case '2':
      console.log(`it reached inside SWITCH - ${buttonClicked}`);
      modalFunctionFile.insertProjectModalFunction(2);
      break;
  }

  // modalContent.style.display = 'block';
  // modalStructure.style.display = 'block';
};

const modalClose = event => {
  document.querySelector('#simpleModal').style.display = 'none';
};

// 2. Event Listener
portfolioGrid.addEventListener('click', modalOpen);
document.querySelector('#simpleModal').addEventListener('click', modalClose);
