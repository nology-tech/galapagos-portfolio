/* DOM elements */
const homeButtons = document.querySelectorAll('.home.button');
const bioButtons = document.querySelectorAll('.bio.button');
const portfolioButtons = document.querySelectorAll('.portfolio.button');
const contactButtons = document.querySelectorAll('.contact.button');
const homePage = document.querySelector('.home.page');
const homePageButtons = document.querySelectorAll('.home-nav li');
const headerTitle = document.querySelector('.header.title');
const socialsToggler = document.querySelector('.socials-burger');
let pageArticles;
let pageTitle;
const portfolioLinks = document.querySelectorAll('h6');
const contactPage = document.querySelector('.contact.page');
const socialsBar = document.querySelector('nav.socials');
const expandButtons = document.querySelectorAll('.article-footer-text');
const galleryNextButton = document.querySelector('.gallery-nav .next');
const galleryPreviousButton = document.querySelector('.gallery-nav .previous');
const galleryItems = Array.from(document.querySelectorAll('.gallery'));

const addEventListeners = (buttons, clickBehaviour) => {
  buttons.forEach(button => {
    button.addEventListener('click', () => clickBehaviour(event));
  });
};

const playBeep = (filePath) => {
  let beep = new Audio(filePath);
  beep.play();
};



const updatePage = (event) => {
  if (document.querySelector('.on') === null) {
    loadMainMenu();
  } else {
    playBeep('./index/assets/audio/lowbeep.mp3');
    let livePage = document.querySelector('.on');
    let newPage = document.querySelector(`.${event.currentTarget.classList[0]}.page`);
    setTimeout(() => {
      livePage.classList.remove('on');
      newPage.classList.add('on');
      pageFadeIn(newPage.classList[0]);
    }, 2000);
  }
};


/* Animations */

const mainMenuFadeIn = (event) => {
  setTimeout((() => homePageButtons.forEach((homePageButton, index) => {
    homePageButton.style.transitionDelay = `${index * 0.4}s`;
    homePageButton.style.opacity = '1';
    homePageButton.style.transform = 'scale(1)';
  })), 500);
  setTimeout(() => headerTitle.style.opacity = '1', 500);
}

const mainMenuFadeOut = (event) => {
  event.currentTarget.style.color = '#8ea8c3';
  event.currentTarget.style.borderBottom = '2px solid #ee6352';
  homePageButtons.forEach((homePageButton, index) => {
    if (homePageButton != event.currentTarget) {
      homePageButton.style.transitionDelay = `${index * 0.4}s`;
      homePageButton.style.opacity = '0';
      homePageButton.style.transform = 'scale(1.3)';
    } else {
      homePageButton.style.transitionDelay = '1.5s';
      homePageButton.style.opacity = '0';
      homePageButton.style.transform = 'scale(1.5)';
    }
    headerTitle.style.opacity = '0';
  });
};


const pageFadeIn = (newPage) => {
  pageArticles = document.querySelectorAll(`.${newPage} article`);
  pageTitle = document.querySelector(`.${newPage}.title`);
  setTimeout((() => pageArticles.forEach((article, index) => {
    article.style.transitionDelay = `${index * 0.4}s`;
    article.style.opacity = '1';
    article.style.transform = 'scale(1)';
  })), 500);
  setTimeout(() => pageTitle.style.opacity = '1', 500);
}

const pageFadeOut = (page, event) => {
  event.currentTarget.style.color = '#8ea8c3';
  event.currentTarget.style.borderBottom = '2px solid #ee6352';
  `.${page}pageButtons`.forEach((button, index) => {
    if (button != event.currentTarget) {
      button.style.transitionDelay = '1.5s';
      button.style.opacity = '0';
      button.style.transform = 'scale(1.5)';
    }
    `.${page}PageTitle`.style.opacity = '0';
  });
};

/* Navigation functions */

const loadMainMenu = (event) => {
  homePage.classList.add('on');
  mainMenuFadeIn(event);
  if (event) {
    updatePage(event);
  }
  setTimeout(() => {
    headerTitle.style.opacity = '1';
  }, 2000);
};

const expandArticle = (event) => {
  event.currentTarget.parentNode.parentNode.childNodes[3].classList.toggle('open');
  event.currentTarget.parentNode.parentNode.childNodes[5].classList.toggle('open');
  if (event.currentTarget.innerText == "＋") {
    event.currentTarget.innerText = "－";
    playBeep('./index/assets/audio/mediumbeep.mp3');
  } else {
    event.currentTarget.innerText = "＋";
    playBeep('./index/assets/audio/highbeep.mp3');

  };
}

const toggleSocials = () => {
  const burgerIcons = Array.from(socialsToggler.childNodes).filter(node => node.tagName === "H3");
  burgerIcons.forEach(burgerIcon => burgerIcon.classList.toggle("burger-hide"));
  socialsBar.classList.toggle("display-socials")
}

socialsToggler.addEventListener("click", toggleSocials);
addEventListeners(homePageButtons, mainMenuFadeOut);
addEventListeners(homeButtons, loadMainMenu);

const previousImage = () => {
  for (let i = 0; i < galleryItems.length; i++) {
    if (galleryItems[i].classList.contains("active-image")) {
      galleryItems[i].classList.toggle("active-image");
      i === 0 ? galleryItems[galleryItems.length - 1].classList.toggle("active-image") : galleryItems[i - 1].classList.toggle("active-image");
      return
    }
  }
}
const nextImage = () => {
  for (let i = 0; i < galleryItems.length; i++) {
    if (galleryItems[i].classList.contains("active-image")) {
      galleryItems[i].classList.toggle("active-image");
      galleryItems[i + 1] ? galleryItems[i + 1].classList.toggle("active-image") : galleryItems[0].classList.toggle("active-image");
      return
    }
  }
}

addEventListeners(bioButtons, updatePage);
addEventListeners(portfolioButtons, updatePage);
addEventListeners(contactButtons, updatePage);
addEventListeners(expandButtons, expandArticle);
galleryNextButton.addEventListener("click", nextImage);
galleryPreviousButton.addEventListener("click", previousImage);

updatePage();