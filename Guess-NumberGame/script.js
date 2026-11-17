const randomNumber = (parseInt(Math.random() * 100 + 1))
const input = document.querySelector('#guessInput')
const submit = document.querySelector('#submitGuess')
const guessSlot = document.querySelector('#previousGuesses')
const guessesRemaining = document.querySelector('#guessesRemaining')
const lowOrHi = document.querySelector('.loworhigh')
const startOver = document.querySelector('.esultparse')

const p = document.createElement('p')
let previousGuesses = []
let numGuesses = 1
let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(input.value);
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (guess === '' || isNaN(guess)  || guess < 1 || guess > 100) {
        displayMessage('Please enter a valid number');
    } else{
        previousGuesses.push(guess);
        if (numGuesses === 11) {
            displayGuesses(guess);
            displayMessage(`Game Over! The number was ${randomNumber}`);
            endGame();
        } else{
            displayGuesses(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
if (guess === randomNumber) {
    displayMessage(`Congratulations! You guessed the number!`);
    endGame();
} else if (guess < randomNumber) {
    displayMessage(`Too low! Try again!`);
} else if (guess > randomNumber) {
    displayMessage(`Too high! Try again!`);
}
}
function displayGuesses(guess) {
    input.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuesses++;
    guessesRemaining.innerHTML = `Guesses remaining: ${11 - numGuesses}`;

}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
    document.querySelector('#newGame').addEventListener('click', function (e) {
        randomNumber = (parseInt(Math.random() * 100 + 1));
        previousGuesses = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        lowOrHi.innerHTML = '';
        guessesRemaining.innerHTML = `Guesses remaining: 10`;
        input.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;

 })
}
function endGame() {
    input.value = '';
    input.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
    startOver.appendChild(p);
    playGame = false;
    newGame();
}