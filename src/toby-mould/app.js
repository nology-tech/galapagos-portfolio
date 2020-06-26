import * as modalhtml from './modalHTML.js';
import * as data from './data.js';

// 1. Grab Items
const portfolioGrid = document.querySelector('#portfolio .items');
const portfolioItems = document.querySelectorAll('#portfolio .item');
const modalContent = document.querySelector('#simpleModal .modal-content');
const modalStructure = document.querySelector('#simpleModal');
console.log(portfolioGrid);
const projectList = document.querySelector('#portfolio .items');
// ----------------------------------------------------------------

const buttons = data.data.map((project, index) => {
  return `
  <button class="item" value="${index}">
    <h4>${project.name}</h4>
  </button>`;
});
projectList.innerHTML = buttons.join('');

// 3. Event Handler
const modalEventHandler = event => {
  const buttonClicked = event.target.value;
  console.log(`it reached inside Event Handler - ${buttonClicked}`);

  switch (buttonClicked) {
    case '0':
      modalhtml.something(0);
      console.log(`it reached inside SWITCH - ${buttonClicked}`);
      break;
    case '1':
      modalhtml.something(1);
      console.log(`it reached inside SWITCH - ${buttonClicked}`);
      break;
    case '2':
      modalhtml.something(2);
      console.log(`it reached inside SWITCH - ${buttonClicked}`);
      break;
    // case '4':
    //   return (modalContent.innerHTML = modalhtml);
    // // break;
    // case '5':
    //   return (modalContent.innerHTML = modalhtml);
    // // break;
    // case '6':
    //   return (modalContent.innerHTML = modalhtml);
    // // break;
    // case '7':
    //   return (modalContent.innerHTML = modalhtml);
    // // break;
  }

  modalContent.style.display = 'block';
  // modalStructure.style.display = 'block';
};

// 2. Event Listener
portfolioGrid.addEventListener('click', modalEventHandler);
