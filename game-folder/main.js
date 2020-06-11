// document.addEventListener('DOMContentLoaded', () => {

const cardArray = [{
        name: 'bear',
        img: 'images/bear.png'
    },
    {
        name: 'bear',
        img: 'images/bear.png'
    },
    {
        name: 'donkey',
        img: 'images/donkey.png'
    },
    {
        name: 'donkey',
        img: 'images/donkey.png'
    },
    {
        name: 'elephant',
        img: 'images/elephant.png'
    },
    {
        name: 'elephant',
        img: 'images/elephant.png'
    },
    {
        name: 'lion',
        img: 'images/lion.png'
    },
    {
        name: 'lion',
        img: 'images/lion.png'
    },
    {
        name: 'ostrich',
        img: 'images/ostrich.png'
    },
    {
        name: 'ostrich',
        img: 'images/ostrich.png'
    },
    {
        name: 'parrot',
        img: 'images/parrot.png'
    },
    {
        name: 'parrot',
        img: 'images/parrot.png'
    }
]

//randomiser 
cardArray.sort(() => 0.5 - Math.random())

//the board

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []


// dont forget for looping

const createBoard = () => {
    for (i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/memory-game.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

//match
function checkForMatch() {
    let cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if (cardsChosen[0] === cardsChosen[1]) {
        alert(`it's a match!`)
        cards[optionOneId].setAttribute('src', 'images/white-background.png');
        cards[optionTwoId].setAttribute('src', 'images/white-background.png');
        cardsWon.push(cardsChosen)
    } else if (cardsChosen[0] !== cardsChosen[1]) {
        setTimeout(() => {
            cards[optionOneId].setAttribute('src', 'images/memory-game.png');
            cards[optionTwoId].setAttribute('src', 'images/memory-game.png');
            alert('try again!')
        }, 500);
    } else {
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
    }

    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length / 2) {
        resultDisplay.textContent = 'you won the game!'
    }
}

//flipping
function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2 && cardsChosenId[0] === cardsChosenId[1]) {
        alert("You are choosing the same card. Choose another one!")
        cardsChosenId.pop()
        cardsChosen.pop()
        return
    } else if (cardsChosen.length === 2) {
        checkForMatch();
    }
    // setTimeout(checkForMatch, 200)

}

createBoard();
// });