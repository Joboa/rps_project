// declaring computer and human variables
let options,
    playByHuman;

// computer play options
options = ['rock','paper','scissors']

// generate random selection 
function generateSelection(){
    return Math.floor(Math.random()*3);
}

function computerPlay(number) {
    return options[number];
}

// selection by computer
let computerSelection = generateSelection();
//console.log(computerSelection);

// selection by human
//playByHuman = prompt('Enter your play:')

// accepting case sensitive inputs
let playerSelection = playByHuman.toLowerCase()
//console.log(playerSelection);

// Win or Draw

function winner(a, b) {
    let aPosition = options.indexOf(a);
    if (aPosition < 0) throw 'Unknown word'
    if (aPosition === options.length-1 && b === 0){
        return -1
    } else if (b === options.length-1 && aPosition === 0) {
        return 1
    }
    return aPosition - b;
}

function decideWinner(playerSelection, computerSelection){
    let res = winner(playerSelection, computerSelection )
    if (res > 0) {
        console.log(`You win, ${playerSelection} beats ${options[computerSelection]}!`);
    } else if (res < 0) {
        console.log(`You lost, ${options[computerSelection]} beats ${playerSelection}!`);
    } else {
        console.log(`Draw, no one won!`, );
    }
}

decideWinner(playerSelection,computerSelection);

let  playerScore = 0;

