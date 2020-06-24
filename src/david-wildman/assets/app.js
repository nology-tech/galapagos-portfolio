const header = document.querySelector('header');
const headerTitleContainer = document.querySelector(
  '.header-title.landing-page-effect'
);
const headerTitleOne = document.querySelector('.title-one');
const headerTitleTwo = document.querySelector('.title-two');
const headerContents = document.querySelector('header *');
const navButtons = document.querySelector('body > header > nav > ul');
const enterButton = document.querySelector('#enter-button');
const bioButton = document.querySelector('#bio-button');
const portfolioButton = document.querySelector('#portfolio-button');
const contactButton = document.querySelector('#contact-button');

// const foldAway = () => {
//   console.log('heyyyy');
// };

const mainMenu = () => {
  enterButton.style.display = 'none';
  headerTitleContainer.classList.toggle('landing-page-effect');
  headerTitleOne.classList.toggle('landing-page-effect');
  headerTitleTwo.classList.toggle('landing-page-effect');
};

// navButtons.addEventListener('click', foldAway);
headerTitleContainer.addEventListener('click', mainMenu);
// bioButton.addEventListener('click', foldAway);
// portfolioButton.addEventListener('click', foldAway);
// contactButton.addEventListener('click', foldAway);
