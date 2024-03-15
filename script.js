const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

let result = document.getElementById('result');
let yourScore = document.getElementById('yourScore');
let computerScore = document.getElementById('computerScore');

let computerscore = 0;
let userScore = 0;


let computerInput;
let computerMove;

function random(){
    let moveArr = ["rock", "paper", "scissors"];
     computerInput = Math.floor(Math.random() * moveArr.length);
     computerMove = moveArr[computerInput];
    console.log(computerMove);
}



rockBtn.addEventListener("click", function(){
 
    let myMove = "rock";

    random();

    if(myMove === computerMove)
    {
        result.innerHTML = "It's a tie!";
    }
    else if(computerMove === "paper")
    {
        result.innerHTML = "You lose! paper beats rock";
        computerscore++;
        computerScore.innerHTML = computerscore;
    }
    else if(computerMove === "scissors")
    {
        result.innerHTML = "You win! rock beats scissors";
        userScore++;
        yourScore.innerHTML = userScore;
    }

});

paperBtn.addEventListener("click", function(){
 
    let myMove = "paper";

    random();
    
    if(myMove === computerMove)
    {
        result.innerHTML = "It's a tie!";
    }
    else if(computerMove === "rock")
    {
        result.innerHTML = "You win! paper beats rock";
        userScore++;
        yourScore.innerHTML = userScore;
    }
    else if(computerMove === "scissors")
    {
        result.innerHTML = "You lose! scissors beats paper";
        computerscore++;
        computerScore.innerHTML = computerscore; 
    }

});

scissorsBtn.addEventListener("click", function(){
 
    let myMove = "scissors";

    random();
    
    if(myMove === computerMove)
    {
        result.innerHTML = "It's a tie!";
    }
    else if(computerMove === "rock")
    {
        result.innerHTML = "You lose! rock beats scissors";
        computerscore++;
        computerScore.innerHTML = computerscore;
    }
    else if(computerMove === "paper")
    {
        result.innerHTML = "You win! scissors beats paper";
        userScore++;
        yourScore.innerHTML = userScore; 
    }

});
