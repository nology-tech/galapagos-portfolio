const playAudio = (audioSource) => {
  let audio = new Audio(audioSource);
  audio.play();
};
const enterButton = document.querySelector('#enter-button');
const landingPage = document.querySelector('.landing.page');
const homePage = document.querySelector('.home.page');
const header = document.querySelector('header');
const headerTitleContainer = document.querySelector(
  '.header-title.landing-page-effect'
);
const headerTitleOne = document.querySelector('.title-one');
const headerTitleTwo = document.querySelector('.title-two');
const headerContents = document.querySelector('header *');
const navButtons = document.querySelector('body > header > nav > ul');

const bioButton = document.querySelector('#bio-button');
const portfolioButton = document.querySelector('#portfolio-button');
const contactButton = document.querySelector('#contact-button');

// const foldAway = () => {
//   console.log('heyyyy');
// };.


const mainMenu = () => {
  enterButton.classList.remove('fly-in');
  enterButton.classList.add('fly-out');
  setTimeout(() => {
    console.log(landingPage.classList);
    landingPage.classList.remove('on');
    homePage.classList.add('on');
  }, 5000);
  headerTitleContainer.classList.toggle('landing-page-effect');
  headerTitleOne.classList.toggle('landing-page-effect');
  headerTitleTwo.classList.toggle('landing-page-effect');
};

// navButtons.addEventListener('click', foldAway);


enterButton.addEventListener('click', mainMenu);

headerTitleContainer.addEventListener('none', mainMenu);
// bioButton.addEventListener('click', foldAway);
// portfolioButton.addEventListener('click', foldAway);
// contactButton.addEventListener('click', foldAway);