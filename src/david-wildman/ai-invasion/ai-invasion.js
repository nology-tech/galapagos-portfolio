import { coreGameAssets, wordsArray } from './modules/ai-invasion-assets.js';

console.log('AI Invasion v0.1');

/* ---------- AI INVASION - a game by David Wildman ---------*/

/* ---------- The aim of this game is to review words that pop up on your screen, and shoot any that are not real words.
------------- 
------------- When the game starts, the will see a "play" button and an "instructions" button.
------------- On clicking "instructions", a guide to playing the game is shown.
------------- On clicking "play",  countdown begins from 3.
------------- When the game starts, a word appears somewhere on the screen.
------------- You have to decide whether to keep or discard the word.
------------- Clicking on the word brings up its definition and a "keep" and "discard" button.
------------- If you keep a real word, your score is increased by the point value of that word.
------------- If you discard a real word, your score is decreased by the point value of that word.
------------- If you keep a fake word, the language pollution level increases by 1.
------------- If you discard a fake word, your score increases by the point value of that word.
------------- Once the language pollution level reaches a given threshold, you lose the game and your score is displayed.
------------- If the number of fake words exceeds a given threshold, all interactivity stops.
------------- The game then spews out loads of fake words for 3 seconds. It is then game over.
------------- If you score over a certain threshold, you are given a particularly eloquent message.
------------- If you score below a given threshold, you are given a poorly worded message.
------------- -------------------------------------------------------------------------------------------------------------*/

/*----------- GLOBAL VARIABLES INITIALIZATION ----------*/
let gameReset = true;
let playerScore = 0;
let currentWord;
// let scoreOne = 0;
// let scoreTwo = 0;
// let scoreThree = 0;
// let highScore = 0;
// let currentLanguagePollutionLevel = 0;
const newGameWordsArray = [];

// DOM Elements //
const resetToggleButton = document.querySelector('#reset-toggle-button');
const gameBoard = document.querySelector('.game-board');
const keepDiscardButtonArea = document.querySelector('header');
const scoreBoard = document.querySelector('#player-score');

/*-----------------------------------------*/
/*-----------                    ----------*/
/*-----------                    ----------*/
/*----------- CORE GAME FUNCTION ----------*/
/*-----------                    ----------*/
/*-----------                    ----------*/
/*-----------------------------------------*/

const getNewGameWordsArray = () => {
  // The wordsArray is imported from the core game assets file.
  // The object at index position [0] should remain the same
  // each time the game is run.
  console.log('THIS WORD SHOULD BE THE SAME EACH TIME: ', wordsArray[0].word);
  // The Core Game Assets array is never mutated. At the moment,
  // it contains very few objects. Once there are a significant number
  // of objects in this array, I will set a hard limit on the
  // number of objects to import for a game.
  for (let i = 0; i < coreGameAssets.length; i++) {
    // This block of code is looping through the imported
    // array of word objects, and picking out a random one
    // to splice out and push into the newGameWordsArray.
    // The random number will always correspond to a valid
    // index of an object within the current wordsArray. Once
    // all the objects have been pushed, the loop stops.
    let n = Math.round(wordsArray.length * Math.random());
    let splicedWordObject = wordsArray.splice(n - 1, 1)[0];
    newGameWordsArray.push(splicedWordObject);
  }

  // Finally, I log the object at index position [0]
  // of the new game array. This makes it easy to
  // check whether or not the array has been
  // randomized successfully.
  console.log(
    'THIS WORD SHOULD BE DIFFERENT EACH TIME: ',
    newGameWordsArray[0].word
  );
};

const playGame = () => {
  console.log(newGameWordsArray);
  for (let i = 1; i <= coreGameAssets.length; i++) {
    const newWordObject = newGameWordsArray.shift();
    newGameWordsArray.push(newWordObject);
    setTimeout(addItemsToGameBoard, 5000 * i, newWordObject);
  }
  console.log(newGameWordsArray);
};

/*----------- GLOBAL FUNCTIONS ----------*/

const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

// Play and reset button  //
const toggleReset = () => {
  if (gameReset === true) {
    gameReset = false;
    console.log('Game started.');
    resetToggleButton.setAttribute('value', 'RESTART');
    gameBoard.style.border = 'none';
    gameBoard.style.backgroundImage =
      'url(https://media.giphy.com/media/l0MYGWqxQUdCONvTq/giphy.gif)';
    gameBoard.style.backgroundSize = 'contain';
    gameBoard.style.backgroundPosition = 'center';
    gameBoard.style.backgroundRepeat = 'no-repeat';
    getNewGameWordsArray();
    playGame();
    timerMechanism();
  } else {
    gameReset = true;
    // console.log("Game reset.");
    // resetToggleButton.setAttribute("value", "PLAY");
    // getNewGameWordsArray();
    window.location.reload();
  }
};

const addItemsToGameBoard = (newWord) => {
  gameBoard.innerHTML += newWord.renderWord;
};

const getButtons = (event) => {
  currentWord = event.target;
  currentWord.style.display = 'none';
  console.log(currentWord);
  if (event.target == event.currentTarget) {
    keepDiscardButtonArea.innerHTML = '';
  } else {
    console.log(event);
    keepDiscardButtonArea.innerHTML = `<button type='button' value='${event.target.attributes[0].value}' color='blue' class='${event.target.innerText}' id="discard" data-is-real='${event.target.attributes[2].value}'>DISCARD ${event.target.innerText}</button><div>${event.target.attributes[1].value}</div><button type='button' value='${event.target.attributes[0].value}' color='blue' class='${event.target.innerText}' id="keep" data-is-real='${event.target.attributes[2].value}'>KEEP ${event.target.innerText}</input>`;
  }
};

const playerScoreEvent = (event) => {
  if (event.target == event.currentTarget) {
    keepDiscardButtonArea.innerHTML = '';
  } else {
    console.log(event.target.isReal);
    let thisScore = parseInt(event.target.value);
    console.log(thisScore);
    console.log(playerScore);
    console.log(event.target.id, event.target.attributes[5].value);
    if (
      (event.target.id == 'keep' &&
        event.target.attributes[5].value == 'true') ||
      (event.target.id == 'discard' &&
        event.target.attributes[5].value == 'false')
    ) {
      console.log('CORRECT');
      gameBoard.style.backgroundImage =
        'url(https://media.giphy.com/media/WUsOgqfcpOBRlJPrUM/giphy.gif)';
      playerScore += thisScore;
    } else {
      console.log('INCORRECT');
      gameBoard.style.backgroundImage =
        'url(https://media.giphy.com/media/hPPx8yk3Bmqys/giphy.gif)';
      playerScore -= thisScore;
    }
    scoreBoard.innerHTML = playerScore;
    event.target.style.display = 'none';
    keepDiscardButtonArea.innerHTML = '';
    keepDiscardButtonArea.innerHTML =
      event.target.attributes[5].value == 'false'
        ? `<div></div><div>${event.target.attributes[3].value.toUpperCase()}<br>is a<br>FAKE WORD!!!</div>`
        : `<div></div><div>${event.target.attributes[3].value.toUpperCase()}<br>is a<br>REAL WORD!!!</div>`;
  }
};

const timerMechanism = () => {
  let timer = document.querySelector('#timer');
  let timeRemaining = 60 * 1.75,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timeRemaining / 60, 10);
    seconds = parseInt(timeRemaining % 60, 10);
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timer.textContent = minutes + ':' + seconds;
    if (--timeRemaining < 0) {
      timer.textContent = '';
      if (playerScore <= 0) {
        keepDiscardButtonArea.innerHTML = `<div></div><div><br>GAME<br>OVER</div>`;
        gameBoard.style.backgroundImage =
          'url(https://media.giphy.com/media/X3nnss8PAj5aU/giphy.gif)';
      } else {
        keepDiscardButtonArea.innerHTML = `<div></div><div><br>WELL<br>DONE!</div>`;
        gameBoard.style.backgroundImage =
          'url(https://media.giphy.com/media/VGVwLultLZjrrssAak/giphy.gif)';
      }
    }
  }, 1000);
};

/*----------- ------------------------------------------------------------------------------------------------------------*/
// Global event Listeners //
resetToggleButton.addEventListener('click', toggleReset);
gameBoard.addEventListener('click', getButtons, true);
keepDiscardButtonArea.addEventListener('click', playerScoreEvent);
