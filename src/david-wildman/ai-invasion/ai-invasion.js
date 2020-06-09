import  { wordsArray } from "./modules/ai-invasion-names.js";

for ( let i = 0; i < wordsArray.length; i ++) {
}

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

// Starting and pausing the game //

let gameReset = true;

// Game variables //

let currentScore = 0;
let scoreOne = 0;
let scoreTwo = 0;
let scoreThree = 0;
let highScore = 0;
let currentLanguagePollutionLevel = 0;

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

// Random number generator, used for element coordinates // 

/*----------- ------------------------------------------------------------------------------------------------------------*/

/*----------- GLOBAL CLASSES ----------*/




// Event Listeners //

resetToggleButton.addEventListener("click", toggleReset);
wordsArray.forEach((wordObject) => console.log(wordObject.word));

