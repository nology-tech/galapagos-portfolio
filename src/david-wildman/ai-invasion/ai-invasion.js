import  { coreGameAssets, wordsArray } from "./modules/ai-invasion-assets.js";

console.log("AI Invasion v0.1");

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
let currentScore = 0;
let scoreOne = 0;
let scoreTwo = 0;
let scoreThree = 0;
let highScore = 0;
let currentLanguagePollutionLevel = 0; 
const newGameWordsArray = [];

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
  console.log(wordsArray[0].word);
  
  
  // The Core Game Assets array is never mutated. At the moment,
  // it contains very few objects. Once there are a significant number
  // of objects in this array, I will set a hard limit on the
  // number of objects to import for a game.
  for (let i = 0; i < coreGameAssets.length; i ++) {
    
    
    // This block of code is looping through the imported
    // array of word objects, and picking out a random one
    // to splice out and push into the newGameWordsArray.
    // The random number will always correspond to a valid
    // index of an object within the current wordsArray. Once
    // all the objects have been pushed, the loop stops.
        let n = Math.round(wordsArray.length * Math.random());
    let splicedWordObject = (wordsArray.splice(n-1, 1))[0];    
    newGameWordsArray.push(splicedWordObject);
  }
  
  
  
  // Finally, I log the object at index position [0]
  // of the new game array. This makes it easy to
  // check whether or not the array has been
  // randomized successfully.
  console.log(newGameWordsArray[0].word);
}

// DOM Elements //
const resetToggleButton = document.querySelector("#reset-toggle-button");
const gameBoard = document.querySelector(".game-board");



/*----------- GLOBAL FUNCTIONS ----------*/
// Play and reset button //
const toggleReset = () => {
  if (gameReset === true) {
    gameReset = false;
    console.log("Game started.");
    resetToggleButton.setAttribute("value", "NEW GAME")
  } else {
    gameReset = true;
    console.log("Game reset.");
    resetToggleButton.setAttribute("value", "PLAY")
  }
}



/*----------- ------------------------------------------------------------------------------------------------------------*/
// Event Listeners //
resetToggleButton.addEventListener("click", toggleReset);



getNewGameWordsArray();


console.log()

const numberOfMandatoryCommits = 8;
console.log(numberOfMandatoryCommits);