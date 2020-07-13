// (1) - IMPORTS
import * as modalOpenFuncFile from './modalHTML.js';
import * as dataFile from './data.js';

// (2) - INITIALLY-GRABBED ELEMENT
const portfolioGridGlobal = document.querySelector('#portfolio .items');
const modalGlobal = document.querySelector('#simpleModal');

// (3) - AUTO-RENDER PORTFOLIO PROJECT BUTTONS AND BACKGROUND PICS USING 'DATA.JS' FILE.
const addSkillSectionLanguageIconsFromDataFile = () => {
  const skillsIconSection = document.querySelector('#skills .items');
  const icons = dataFile.skillsIcons.map(icon => {
    return icon;
  });
  // console.log(icons);
  skillsIconSection.innerHTML += icons.join('');
};
addSkillSectionLanguageIconsFromDataFile();

const addPortfolioButtonsToHTMLFromDataFile = () => {
  const buttons = dataFile.projects.map((project, index) => {
    return `
    <button class="item" value="${index}">
      <h4>${project.name}</h4>
    </button>`;
  });
  portfolioGridGlobal.innerHTML += buttons.join('');
};
addPortfolioButtonsToHTMLFromDataFile();

const portfolioButtonBackgrounds = () => {
  const buttonList = document.querySelectorAll('#portfolio button');

  const buttonBackgrounds = dataFile.projects.map((project, index) => {
    return (buttonList[index].style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${project.image}) no-repeat center center/cover`);
  });
};
portfolioButtonBackgrounds();

// const listOfRepos = getRepos();
// console.log(listOfRepos);

// Returns an array of repo objects with a languages array
const getRepoLanguages = listOfRepos => {
  // repo is the repository data
  return listOfRepos.map(repo =>
    fetch(repo.languages_url)
      .then(response => response.json())
      // data is the language data
      .then(data => {
        return { ...repo, languages: data };
      })
      .catch(error => {
        console.error(error);
        // https://api.github.com/repos/tobymould/${project}/languages
      })
  );
};
// getRepoLanguages(getRepos());

// gets public repos
const getRepos = () => {
  return fetch(`https://api.github.com/users/tobymould/repos`)
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .then(repos => getRepoLanguages(repos))
    .catch(error => console.error(error));
};
console.log(getRepos());

// ---------------------------------------------------------------------//
// ----------------------EVENT-DEPENDENT FUNCTIONS----------------------//
// ---------------------------------------------------------------------//

// (4) - WHEN PROJECT (BUTTON||MODAL) CLICKED, (OPEN||CLOSE) PROJECT-SPECIFIC MODAL (USED BUTTON NUMBER PRESSED AS ARG)
const modalOpen = event => {
  const buttonClicked = event.target.value;
  // console.log(`it reached inside Event Handler - ${buttonClicked}`);
  switch (buttonClicked) {
    case '0':
      // console.log(`it reached inside SWITCH - ${buttonClicked}`);
      modalOpenFuncFile.insertProjectModalFunction(0);
      break;
    case '1':
      // console.log(`it reached inside SWITCH - ${buttonClicked}`);
      modalOpenFuncFile.insertProjectModalFunction(1);
      break;
    case '2':
      // console.log(`it reached inside SWITCH - ${buttonClicked}`);
      modalOpenFuncFile.insertProjectModalFunction(2);
      break;
    case '3':
      // console.log(`it reached inside SWITCH - ${buttonClicked}`);
      modalOpenFuncFile.insertProjectModalFunction(3);
      break;
    case '4':
      // console.log(`it reached inside SWITCH - ${buttonClicked}`);
      modalOpenFuncFile.insertProjectModalFunction(4);
      break;
    case '5':
      // console.log(`it reached inside SWITCH - ${buttonClicked}`);
      modalOpenFuncFile.insertProjectModalFunction(5);
      break;
    case '6':
      // console.log(`it reached inside SWITCH - ${buttonClicked}`);
      modalOpenFuncFile.insertProjectModalFunction(6);
      break;
    case '7':
      // console.log(`it reached inside SWITCH - ${buttonClicked}`);
      modalOpenFuncFile.insertProjectModalFunction(7);
      break;
    case '8':
      // console.log(`it reached inside SWITCH - ${buttonClicked}`);
      modalOpenFuncFile.insertProjectModalFunction(8);
      break;
    case '9':
      // console.log(`it reached inside SWITCH - ${buttonClicked}`);
      modalOpenFuncFile.insertProjectModalFunction(9);
      break;
    case '10':
      // console.log(`it reached inside SWITCH - ${buttonClicked}`);
      modalOpenFuncFile.insertProjectModalFunction(10);
      break;
    case '11':
      // console.log(`it reached inside SWITCH - ${buttonClicked}`);
      modalOpenFuncFile.insertProjectModalFunction(11);
      break;
    case '12':
      // console.log(`it reached inside SWITCH - ${buttonClicked}`);
      modalOpenFuncFile.insertProjectModalFunction(12);
      break;
  }
};

const modalClose = event => {
  const modalLocalScope = document.querySelector('#simpleModal');
  modalLocalScope.style.display = 'none';
};

// (5) - PROJECT BUTTON HOVER EFFECT - MOUSEENTER = RAINBOW, MOUSELEAVE = BLACK-50;
const hoverEffect = event => {
  const imageFile = dataFile.projects[event.target.value];

  if (event.type == 'mouseenter') {
    return (event.target.style.background = `linear-gradient(217deg, rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.71%), linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%), linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%), url(${imageFile.image}) no-repeat center center/cover`);
  } else if (event.type == 'mouseleave') {
    return (event.target.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageFile.image}) no-repeat center center/cover`);
  }
};

// ---------------------------------------------------------------------//
// ----------------------EVENT LISTENERS/TRIGGERS----------------------//
// ---------------------------------------------------------------------//
// (6) - MODAL OPEN & CLOSE EVENT TRIGGERS
portfolioGridGlobal.addEventListener('click', modalOpen);
modalGlobal.addEventListener('click', modalClose);

// ---------------------------------------------------------------------//
// ----------------------EVENT LISTENERS/TRIGGERS----------------------//
// ---------------------------------------------------------------------//
// (6) - MODAL OPEN & CLOSE EVENT TRIGGERS
portfolioGridGlobal.addEventListener('click', modalOpen);
modalGlobal.addEventListener('click', modalClose);

// (7) - PORTFOLIO BUTTON HOVER EFFECT EVENT TRIGGERS
const buttons = document.querySelectorAll('#portfolio button'); // NEEDS TO BE DOWN HERE AFTER BUTTONS THAT ARE RENDERED IN JS NEAR THE START OF THIS SCRIPT^^
buttons.forEach(button => button.addEventListener('mouseenter', hoverEffect));
buttons.forEach(button => button.addEventListener('mouseleave', hoverEffect));

// (8) - SEARCH FUNCTIONALITY
const search = document.querySelector('#portfolio input');
const searchFunction = event => {
  const term = event.target.value.toLowerCase();
  buttons.forEach(button => console.log(button.value));
  // console.log(dataFile.projects);

  console.log(dataFile.projects.languages);
  const test = buttons;
  // const filteredProjects = dataFile.projects.languages.forEach((project, index) => {
  //   // console.log(project.languages);
  //   // console.log(buttons[index]);
  //   const filteredProject = project.languages.filter(language => {
  //     // console.log(language);
  //     // if (project.languages.includes(term)) {
  //     if (language.toLowerCase().indexOf(term) == -1) {
  //       // console.log(project);
  //       // buttons[index].style.display = 'none';
  //     }
  //   });
  //   // console.log(project.languages.includes(search.value));
  // });
};
search.addEventListener('keyup', searchFunction);

// (9) - MODAL POPUP BUTTON HOVER EFFECT EVENT TRIGGER
// const modalImageSection = document.querySelector('#summary .image');

// const test = event => console.log(`modalImageSections: ${event.type}`);

// modalImageSection.addEventListener('mouseenter', test);
// modalImageSection.addEventListener('mouseleave', test);

// modalImageSections.forEach(modalImage => modalImage.addEventListener('mouseenter', hoverEffect);
