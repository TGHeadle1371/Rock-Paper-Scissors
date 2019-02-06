console.log("hello");

var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
var scoreBoard_div = document.querySelector(".score-board");
var result_p = document.querySelector(".result > p");
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissors_div = document.getElementById("s");

function getComputerChoice() {
    var choices = ['r', 'p', 's'];
    var randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    var smallWord = "User: ".fontsize(3).sup();
    var smallCompWord = "Comp: ".fontsize(3).sup();
    var userChoice_div = document.getElementById(userChoice);
    console.log("YOU WIN!");
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = smallWord + convertToWord(userChoice) + " beats " + smallCompWord + convertToWord(computerChoice) + ". You Win! ";
    userChoice_div.classList.add('green-glow');
    setTimeout(function () {
        userChoice_div.classList.remove('green-glow');
    }, 300);
}


function lose(userChoice, computerChoice) {
    var smallWord = "User: ".fontsize(3).sup();
    var smallCompWord = "Comp: ".fontsize(3).sup();
    var computerChoice_div = document.getElementById(computerChoice);
    console.log("YOU LOSE!");
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = smallWord + convertToWord(userChoice) + " loses to " + smallCompWord + convertToWord(computerChoice) + ". You Lose! ";
    computerChoice_div.classList.add('red-glow');
    setTimeout(function () {
        computerChoice_div.classList.remove('red-glow');
    }, 300);
}

function draw(userChoice, computerChoice) {
    var smallWord = "User: ".fontsize(3).sup();
    var smallCompWord = "Comp: ".fontsize(3).sup();
    console.log("DRAW");
    result_p.innerHTML = smallWord + convertToWord(userChoice) + " is equal to " + smallCompWord + convertToWord(computerChoice) + ". You Tie! ";
    document.getElementById(computerChoice).classList.add('gray-glow');
    setTimeout(function () {
        document.getElementById(computerChoice).classList.remove('gray-glow');
    }, 300);
}
// Test Random choice of R P or S
// console.log(getComputerChoice());
//Game Function
function game(userChoice) {
    var computerChoice = getComputerChoice();
    // Game Win/Loss Functionality
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
    // Tests
    // console.log(computerChoice);
    // console.log("user choice: " + userChoice);
    // console.log("computer choice: " + computerChoice);
}


function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    });
    paper_div.addEventListener('click', function () {
        game("p");
    });
    scissors_div.addEventListener('click', function () {
        game("s");
    });
}


main();