var wins = 0
var losses = 0
var ties = 0

var playAgain = true

var choices = ["R", "P", "S"]

function getChoices() {
    // human choice
    var humanChoice = prompt("Choose R, P, or S")
    
    // random computer choice
    var randomNum = Math.floor(Math.random() * 3)
    var computerChoice= choices[randomNum]

    return {
        humanChoice,
        computerChoice
    }
}

// compare choices
function compareChoices(humanChoice, computerChoice) {
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
}

// show score
function showScore() {
    alert("Wins: " + wins + "\nTies: " + ties + "\nLosses: " + losses)
}

// game loop
while (playAgain){
    var chosenLetters = getChoices()
    compareChoices(chosenLetters.humanChoice, chosenLetters.computerChoice)

    // show score
    showScore()

    // play again?
    playAgain = confirm("Play again?")
}

alert("Thanks for playing!")
