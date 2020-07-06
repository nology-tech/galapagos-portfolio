import * as modalOpenFuncFile from './modalHTML.js';
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

// STEP 2 - WHEN PROJECT BUTTON PRESSED, RUN THE MODAL DISPLAY FUNCTION TAKING IN THE BUTTON NUMBER PRESSED AS AN ARG.
// 3. Event Handler
const modalOpen = event => {
  const buttonClicked = event.target.value;
  console.log(`it reached inside Event Handler - ${buttonClicked}`);
  switch (buttonClicked) {
    case '0':
      console.log(`it reached inside SWITCH - ${buttonClicked}`);
      modalOpenFuncFile.insertProjectModalFunction(0);
      break;
    case '1':
      console.log(`it reached inside SWITCH - ${buttonClicked}`);
      modalOpenFuncFile.insertProjectModalFunction(1);
      break;
    case '2':
      console.log(`it reached inside SWITCH - ${buttonClicked}`);
      modalOpenFuncFile.insertProjectModalFunction(2);
      break;
    case '3':
      console.log(`it reached inside SWITCH - ${buttonClicked}`);
      modalOpenFuncFile.insertProjectModalFunction(3);
      break;
    case '4':
      console.log(`it reached inside SWITCH - ${buttonClicked}`);
      modalOpenFuncFile.insertProjectModalFunction(4);
      break;
    case '5':
      console.log(`it reached inside SWITCH - ${buttonClicked}`);
      modalOpenFuncFile.insertProjectModalFunction(5);
      break;
    case '6':
      console.log(`it reached inside SWITCH - ${buttonClicked}`);
      modalOpenFuncFile.insertProjectModalFunction(6);
      break;
    case '7':
      console.log(`it reached inside SWITCH - ${buttonClicked}`);
      modalOpenFuncFile.insertProjectModalFunction(7);
      break;
    case '8':
      console.log(`it reached inside SWITCH - ${buttonClicked}`);
      modalOpenFuncFile.insertProjectModalFunction(8);
      break;
    case '9':
      console.log(`it reached inside SWITCH - ${buttonClicked}`);
      modalOpenFuncFile.insertProjectModalFunction(9);
      break;
    case '10':
      console.log(`it reached inside SWITCH - ${buttonClicked}`);
      modalOpenFuncFile.insertProjectModalFunction(10);
      break;
    case '11':
      console.log(`it reached inside SWITCH - ${buttonClicked}`);
      modalOpenFuncFile.insertProjectModalFunction(11);
      break;
    case '12':
      console.log(`it reached inside SWITCH - ${buttonClicked}`);
      modalOpenFuncFile.insertProjectModalFunction(12);
      break;
  }
};

const modalClose = event => {
  document.querySelector('#simpleModal').style.display = 'none';
};

// 2. Event Listener
portfolioGrid.addEventListener('click', modalOpen);
document.querySelector('#simpleModal').addEventListener('click', modalClose);
