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

let gamePaused = true;

// Game variables //

let currentScore = 0;
let scoreOne = 0;
let scoreTwo = 0;
let scoreThree = 0;
let highScore = 0;
let currentLanguagePollutionLevel = 0;
const currentGameWords = [];

// DOM Elements //

const pauseToggleButton = document.querySelector("#pause-toggle-button");



/*----------- GLOBAL FUNCTIONS ----------*/

// Play and pause button //

const togglePause = () => {
  if (gamePaused === true) {
    gamePaused = false;
    console.log("Game unpaused.");
    pauseToggleButton.setAttribute("value", "PAUSE")
  } else {
    gamePaused = true;
    console.log("Game paused.");
    pauseToggleButton.setAttribute("value", "PLAY")
  }
}

// Random number generator, used for element coordinates // 

const getRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
}

/*----------- ------------------------------------------------------------------------------------------------------------*/

/*----------- GLOBAL CLASSES ----------*/

// Word object template //

class Word {
  constructor(word, definition, isReal) { 
    this.word = word;
    this.definition = definition;
    this.isReal = isReal;
    this.pointsScore = this.word.length;
    this.XPosition = getRandomNumber()+"%";
    this.YPosition = getRandomNumber()+"%";
    currentGameWords.push(this);
  }
  giveOverview() {
    if (this.isReal === true) {
    return `${this.word}. Real word. Definition: ${this.definition}.`
    } else if (this.isReal === false) {
    return `${this.word}. Fake word. Definition: ${this.definition}.`
    } else {
      return "This word has an invalid 'isReal' value. Please send a strongly-worded email to david.wildman@nology.io."
    };
  }
}

// Fake Word object template //

class FakeWord extends Word {
  constructor(word, definition) { 
    super(word, definition, false)
  }
}

class RealWord extends Word {
  constructor(word, definition) { 
    super(word, definition, true)
  }
}

/*----------- GLOBAL OBJECTS ----------*/

// Fake words //

const covfefe = new FakeWord("covfefe", "noun. widespread negative media coverage.");
const carnacé = new FakeWord("carnacé", "noun. a leather shoe or shoelace.");
const nonindicating = new FakeWord("nonindicating", "adjective. not officially attesting to an opinion or statement.");
const wreatheness = new FakeWord("wreatheness", "noun. a quality or fact that is the product of time, often thought of as heritable.");
const conturbulent = new FakeWord("conturbulent", "noun. (of speech, writing, or writing styles) shaped into straight lines.");
const spadazone = new FakeWord("spadazone", "noun. a synthetic compound of amygdalin that is one of the chief active constituents of theophylline");
const triscule = new FakeWord("triscule", "adjective. small or barely visible");
const poandie = new FakeWord("poandie", "noun. an angry, aggressive person");
const teruur = new FakeWord("teruur", "noun. a native or inhabitant of the former Spanish kingdom of Veracruz");
const decalcop = new FakeWord("decalcop", "a small structure in a thorax of leaflets");


// Real words //

const octothorpe = new RealWord("octothorpe", "noun. the 'hashtag' (#) symbol.");
const agelast = new RealWord("agelast", "noun. a person who never laughs.");
const peristeronic = new RealWord("peristeronic", "of or relating to pigeons");
const biblioklept = new RealWord("biblioklept", "noun. one who steals books.");
const acnestis = new RealWord("acnestis", "noun. the part of the back which an animal cannot reach to scratch.");
const hircine = new RealWord("hircine", "ajective. of, relating to, or suggestive of a goat.");
const tumescent = new RealWord("tumescent", "adjective. somewhat swollen.");
const dissimulate = new RealWord("dissimulate", "verb. to hide under a false appearance");
const sententious = new RealWord("sententious", "adjective. given to or abounding in excessive moralizing.");
const chimerical = new RealWord("chimerical", "adjective. existing only as the product of unchecked imagination");




// Event Listeners //

pauseToggleButton.addEventListener("click", togglePause);
currentGameWords.forEach((word) => console.log(word));