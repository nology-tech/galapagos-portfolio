// Word object template //



class Word {
  constructor(word, definition, isReal, getRandomCoordinates) {
    getRandomCoordinates = () => Math.floor(Math.random() * 100) + 1;
    this.word = word;
    this.definition = definition;
    this.isReal = isReal;
    this.pointsScore = this.word.length;
    this.XPosition = getRandomCoordinates()+"%";
    this.YPosition = getRandomCoordinates()+"%";
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

// Real Word object template //

class RealWord extends Word {
  constructor(word, definition) { 
    super(word, definition, true)
  }
}

/*----------- GLOBAL OBJECTS ----------*/

// Fake words //

const fakeWord1 = new FakeWord("covfefe", "noun. widespread negative media coverage.");
const fakeWord2 = new FakeWord("carnacé", "noun. a leather shoe or shoelace.");
const fakeWord3 = new FakeWord("nonindicating", "adjective. not officially attesting to an opinion or statement.");
const fakeWord4 = new FakeWord("wreatheness", "noun. a quality or fact that is the product of time, often thought of as heritable.");
const fakeWord5 = new FakeWord("conturbulent", "noun. (of speech, writing, or writing styles) shaped into straight lines.");
const fakeWord6 = new FakeWord("spadazone", "noun. a synthetic compound of amygdalin that is one of the chief active constituents of theophylline");
const fakeWord7 = new FakeWord("triscule", "adjective. small or barely visible");
const fakeWord8 = new FakeWord("poandie", "noun. an angry, aggressive person");
const fakeWord9 = new FakeWord("teruur", "noun. a native or inhabitant of the former Spanish kingdom of Veracruz");
const fakeWord10 = new FakeWord("decalcop", "a small structure in a thorax of leaflets");


// Real words //

const realWord1 = new RealWord("octothorpe", "noun. the 'hashtag' (#) symbol.");
const realWord2 = new RealWord("agelast", "noun. a person who never laughs.");
const realWord3 = new RealWord("peristeronic", "of or relating to pigeons");
const realWord4 = new RealWord("biblioklept", "noun. one who steals books.");
const realWord5 = new RealWord("acnestis", "noun. the part of the back which an animal cannot reach to scratch.");
const realWord6 = new RealWord("hircine", "ajective. of, relating to, or suggestive of a goat.");
const realWord7 = new RealWord("tumescent", "adjective. somewhat swollen.");
const realWord8 = new RealWord("dissimulate", "verb. to hide under a false appearance");
const realWord9 = new RealWord("sententious", "adjective. given to or abounding in excessive moralizing.");
const realWord10 = new RealWord("chimerical", "adjective. existing only as the product of unchecked imagination");

const coreGameAssets = [
  fakeWord1, fakeWord2, fakeWord3, fakeWord4, fakeWord5, fakeWord6, fakeWord7, fakeWord8, fakeWord9, fakeWord10,
  realWord1, realWord2, realWord3, realWord4, realWord5, realWord6, realWord7, realWord8, realWord9, realWord10
]


export const wordsArray = coreGameAssets;

// for ( let i = 0; i < coreGameAssets.length; i ++) {
  
// })

// Sum
// wordsArray.length > 0; i = Math.round(wordsArray.length * Math.random()))