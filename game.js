var wins = 0
var losses = 0
var ties = 0

var choices = ["R", "P", "S"]

// human choice
var humanChoice = prompt("Choose R, P, or S")

// random computer choice
var randomNum = Math.floor(Math.random() * 3)
var computerChoice= choices[randomNum]

console.log("Human: " + humanChoice)
console.log("Computer: " + computerChoice)

// compare choices
if (
    humanChoice === "S" && computerChoice === "P" ||
    humanChoice === "R" && computerChoice === "S" ||
    humanChoice === "P" && computerChoice === "R"
) {
    alert("You win!")
    wins++
} else if (humanChoice === computerChoice) {
    alert("It's a tie!")
    ties++
} else {
    alert("You lost!")
    losses++
}

// show score
alert("Wins: " + wins + "\nTies: " + ties + "\nLosses: " + losses)

// play again?
    // if yes
        // restart game
    // if no
        // exit game
