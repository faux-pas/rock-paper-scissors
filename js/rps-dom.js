options = new Array('rock', 'paper', 'scissors');

playerScore = 0;
computerScore = 0;
playerScoreResult = document.getElementById("playerScore");
computerScoreResult = document.getElementById("computerScore");
logMessage = document.getElementById("logMessage");
gameResult = document.getElementById("result");
winResult = document.getElementById("winResult");

function start() {
    console.log("start pressed");
    let buttons = document.getElementsByClassName('rps-choice');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click',playRound);
    }

    playerScore = 0;
    computerScore = 0;
    playerScoreResult.innerHTML = playerScore;
    computerScoreResult.innerHTML = computerScore;

    logMessage.innerHTML = "Choose: 'Rock' | 'Paper' | 'Scissors'";

    winResult.classList.remove("hidden");
    results.classList.remove("hidden");
    logMessage.classList.remove("hidden");

    var startButton  = document.getElementById('optionStart')
    startButton.onclick = function() {
        return false;
      }
}

function gameQuit() {
    let buttons = document.getElementsByClassName('rps-choice');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].removeEventListener('click', playRound);
    }
    winResult.innerHTML = '';
    winResult.classList.add("hidden");
    results.classList.add("hidden");
    logMessage.classList.add("hidden");

    var startButton  = document.getElementById('optionStart')
    startButton.onclick = start;
}

function computerPlay() {
    return options[Math.floor(Math.random() * 3)];
}

function playRound(event) {
    var playerSelection = event.target.value;
    computerSelection = computerPlay();
    playerValue = options.indexOf(playerSelection);
    console.log({playerSelection, playerValue});
    computerValue = options.indexOf(computerSelection.toLowerCase());
    let p = document.createElement('p');
    //draw
    if (playerValue == computerValue) {
        logMessage.innerHTML = "No Winner! " + playerSelection + " Draws Against " + computerSelection;
    }
    //win
    //in the array rock, paper, scissors the indexs are 0,1,2. Each option loses to the option next going counter clockwise.
    //if playerValue-1 is below 0 see if 2 equals the computerValue else see if player value -1 does
    else if ((playerValue - 1 == -1 ? 2 : playerValue - 1) == computerValue) {
        logMessage.innerHTML = "Round Winner! " + playerSelection + " Beats " + computerSelection;
        playerScore++;
        playerScoreResult.innerHTML = playerScore;
    }
    //lose
    else {
        logMessage.innerHTML = "Round Loser! " + computerSelection + " Beats " + playerSelection;
        computerScore++;
        computerScoreResult.innerHTML = computerScore;
    }

    if (playerScore == 5 || computerScore == 5) {
        let buttons = document.getElementsByClassName('rps-choice');
        logMessage.innerHTML = '';
        winResult.innerHTML = playerScore > computerScore ? "YOU WIN!" : "YOU LOSE!";
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].removeEventListener('click', playRound);
        }
    }
}