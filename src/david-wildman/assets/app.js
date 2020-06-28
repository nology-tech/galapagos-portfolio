const playBeep = (filePath) => {
  let beep = new Audio(filePath);
  beep.play();
};

const enterButton = document.querySelector('#enter-button');
let livePage = document.querySelectorAll('.on');
const landingPage = document.querySelector('.landing.page');
const homePage = document.querySelector('.home.page');
const headerTitle = document.querySelector('section.home.page .header-title');
const homePageButtons = document.querySelectorAll('section.home.page nav ul li');
const bioButton = document.querySelector('#bio-button');
const portfolioButton = document.querySelector('#portfolio-button');
const contactButton = document.querySelector('#contact-button');
const bioPage = document.querySelector('.bio.page');
const portfolioPage = document.querySelector('.portfolio.page');
const contactPage = document.querySelector('.contact.page');

const hack = () => {
  enterButton.classList.remove('hacked');
  enterButton.classList.add('hacked');
}

const loadMainMenu = () => {
  enterButton.classList.remove('fly-in');
  enterButton.classList.add('fly-out');
  homePageButtons.forEach((homePageButton, index) => {
    console.log(homePageButton);
    homePageButton.classList.add('cascade-in');
    homePageButton.style.animationDuration = `0.${2 * (index + 1)}s`;
  });
  setTimeout(() => {
    landingPage.classList.remove('on');
    homePage.classList.add('on');
  }, 1250);
  setTimeout(() => {
    livePage = document.querySelectorAll('.on');
  }, 1251);
  setTimeout(() => {
    headerTitle.style.opacity = '1';
  }, 1300)
};

const doNavEffect = (event) => {
  console.log(headerTitle);
  headerTitle.style.opacity = '0';
  playBeep('./assets/audio/lowbeep.mp3');
  event.currentTarget.classList.remove('cascade-in');
  event.currentTarget.style.color = '#8ea8c3';
  event.currentTarget.style.borderBottom = '2px solid #ee6352';
  console.log(event.currentTarget);
  const menuAnimation = () => {
    homePageButtons.forEach((homePageButton, index) => {
      homePageButton.classList.add('cascade-out');
      homePageButton.style.animationDuration = `0.${1 / (2 * (index + 1))}s`;
    });
  }
  setTimeout(menuAnimation, 400);
};

const loadBioPage = () => {
  console.log('bioPage');
  setTimeout(() => {
    homePage.classList.remove('on');
    bioPage.classList.add('on');
  }, 1250);
  setTimeout(() => {
    livePage = document.querySelectorAll('.on');
  }, 1251);
};

const loadPortfolioPage = () => {
  console.log('portfolioPage');
  setTimeout(() => {
    homePage.classList.remove('on');
    portfolioPage.classList.add('on');
  }, 1250);
  setTimeout(() => {
    livePage = document.querySelectorAll('.on');
  }, 1251);
}

const loadContactPage = () => {
  console.log('contactPage');
  setTimeout(() => {
    homePage.classList.remove('on');
    contactPage.classList.add('on');
  }, 1250);
  setTimeout(() => {
    livePage = document.querySelectorAll('.on');
  }, 1251);
}





homePageButtons.forEach((homePageButton) => {
  console.log(homePageButton);
  homePageButton.addEventListener('click', () => doNavEffect(event));

});
enterButton.addEventListener('mousedown', () => playBeep('./assets/audio/lowbeep.mp3'));
enterButton.addEventListener('click', loadMainMenu);
bioButton.addEventListener('click', loadBioPage);
portfolioButton.addEventListener('click', loadPortfolioPage);
contactButton.addEventListener('click', loadContactPage);


setTimeout(() => playBeep('./assets/audio/lowbeep.mp3'), 250);
setTimeout(() => playBeep('./assets/audio/mediumbeep.mp3'), 450);
setTimeout(() => playBeep('./assets/audio/highbeep.mp3'), 650);

