let playerScore = 0;
let computerScore = 0;

function playerPlay() {
    let pick = prompt("Choose between ROCK | PAPER | SCISSORS").toLowerCase();

    if (pick == "rock" || pick == "paper" || pick == "scissors") {
        // alert(pick);
        return pick;
    } else {
        alert("Please choose only between ROCK | PAPER | SCISSORS");
        playerPlay();
    }
}


function computerPlay() {
    let pick = Math.floor(Math.random() * Math.floor(3));
    switch (pick) {
        case 0:
            // alert(0);
            return "rock";
        case 1:
            // alert(1);
            return "paper";
        case 2:
            // alert(2);
            return "scissors";
        default:
            alert("Something went wrong!");
    }
}

function playRound(playerSelection, computerSelection) {
    let x = playerSelection;
    let y = computerSelection;
    let result;

    if (x == "rock") {
        if (y == "paper") {
            result = "Lose!";
        } else if (y == "scissors") {
            result = "Win!";
        } else {
            result = "Draw!";
        }
    } else if (x == "paper") {
        if (y == "scissors") {
            result = "Lose!";
        } else if (y == "rock") {
            result = "Win!";
        } else {
            result = "Draw!";
        }
    } else if (x == "scissors") {
        if (y == "rock") {
            result = "Lose!";
        } else if (y == "paper") {
            result = "Win!";
        } else {
            result = "Draw!";
        }
    }

    // alert(x + " " + y);
    
    if (result == "Win!") {
        alert("You Win! " + x.toUpperCase() + " beats " + y.toUpperCase());
        return 1;
    } else if (result == "Lose!") {
        alert("You Lose! " + y.toUpperCase() + " beats " + x.toUpperCase());
        return 2;
    } else {
        alert("Draw!");
        return 0;
    }
}

function game() {
    let result = playRound(playerPlay(), computerPlay());
    // alert(result);

    if(result == 1) {
        playerScore++;
    } else if (result == 2) {
        computerScore++;
    } else {

    }

    if (playerScore < 5 && computerScore < 5) {
        alert("SCORE\nYOU   AI\n" + playerScore + "       " + computerScore);
        game();
    } else if (playerScore >= 5) {
        alert("YOU WON!\n\nSCORE\nYOU   AI\n" + playerScore + "       " + computerScore);
    } else if (computerScore >= 5) {
        alert("YOU LOSE!\n\nSCORE\nYOU   AI\n" + playerScore + "       " + computerScore);
    } else {
        alert("Something went wrong!");
    }
}





