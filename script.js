
// Array of words to be assumed that the computer is thinking
var words = ['ROCK', 'PAPER', 'SCISSORS'];

// grab the computer div
var changeOptions = document.querySelector('.computer')

// Function that executes every 2000 milliseconds 
function displayWord() {
    // Random number generator 
    var randomNumber = Math.round(Math.random() * (words.length - 1));
    // Change the word in the span for a random one in the array of words 
    changeOptions.textContent = words[randomNumber]
}

var t = setInterval(displayWord, 500);

// remove setInterval
function stopDisplay() {
    clearInterval(t);
  }

// Options to be selected
let options = ['rock','paper','scissors'];

// generate random selection 
function generateSelection(){
    return Math.floor(Math.random()*3);
}

// computer selection
let computerSelection = generateSelection();

function computerPlay(number) {
    return options[number];
}

// player selection
let playerSelection;

// Player selection upon button click
const rpsButtons = document.querySelectorAll('.rps button');

// selecting button id's as options
let player = document.querySelector('.player')

rpsButtons.forEach((button) => {
    button.addEventListener('click', () => {

        player.textContent = button.id;

        //player selection
        playerSelection = button.id;
       // console.log(playerSelection, ', player');

        stopDisplay();
        var disp = changeOptions.textContent = options[computerSelection];
        //console.log(disp, ', computer');

        decideWinner(playerSelection,computerSelection);

    })
})

// decide winner or loser
function winner(a, b) {
    let aPosition = options.indexOf(a);
    if (aPosition === options.length-1 && b === 0  ) {
        return -1

    } else if (b === options.length-1 && aPosition === 0) {
        return 1
    }
    return aPosition - b;
}

// grab the div for displaying winner or loser
let winMessage = document.querySelector('.displayWinner');


let playerScore = 0;
let computerScore = 0;
let pScore = document.querySelector('.player-score');
let cScore = document.querySelector('.computer-score');
function decideWinner(playerSelection, computerSelection){
    let res = winner(playerSelection, computerSelection )
    if (res > 0) {
        winMessage.textContent = `You won, ${playerSelection} beats ${options[computerSelection]}!`
        playerScore += 1;
        pScore.textContent = playerScore;
    }       
    
    else if (res < 0) {
        winMessage.textContent = `You lost, ${options[computerSelection]} beats ${playerSelection}!`
        computerScore += 1;
        cScore.textContent = computerScore;

    } else {
        winMessage.textContent = `Draw, no one won!`
    }
}

// play again
refresh = document.querySelector('#playA')
refresh.onclick = () => { 
    player.textContent = "";
    winMessage.textContent = "";
    t = setInterval(displayWord, 500);  
}
 
// restart game
restart = document.querySelector('#restart')
restart.onclick = () => { 
    player.textContent = "";
    winMessage.textContent = "";
    pScore.textContent =  0;
    cScore.textContent = 0;
    playerScore = 0; 
    computerScore = 0;
    t = setInterval(displayWord, 500); 

}






