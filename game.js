var wins = 0
var losses = 0
var ties = 0

var choices = ["R", "P", "S"]

// get human choice from input
var humanChoice = prompt("Choose R, P, or S")

// computer randomly chooses
var randomNum = Math.floor(Math.random() * 3)
console.log(choices[randomNum])

// compare choices
    // if humanChoice is S and computerChoice is P OR
    // if humanChoice is R and computerChoice is S OR
    // if humanChoice is P and computerChoice is R 
        // alert human wins
        // increase wins
    // if humanChoice === computerChoice
        // alert tie
        // increase ties
    // else
        // alert that lost
        // increase losses

// play again?
    // if yes
        // restart game
    // if no
        // exit game
