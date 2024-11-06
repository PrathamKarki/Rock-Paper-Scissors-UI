const rockEl = document.querySelector('.rock');
const paperEl = document.querySelector('.paper');
const scissorEl = document.querySelector('.scissors');
const humanSelectionEl = document.querySelector('#user-selection');
const computerSelectionEl =document.querySelector('#computer-selection');
const outcome = document.querySelector('.outcome');
const resultEl = document.querySelector('.result');
const restart = document.querySelector('.reset');
//setting the initial score for the user and computer
let humanScore = 0;
let computerScore = 0;
let round = 0;
let humanChoice = '';
const choice = ["Rock","Paper","Scissors"];



rockEl.addEventListener('click',()=>{
    humanChoice = 'Rock';
    humanSelectionEl.textContent = humanChoice;
    playRound();
});


paperEl.addEventListener('click',()=>{
    humanChoice = 'Paper';
    humanSelectionEl.textContent = humanChoice;
    playRound();
});

scissorEl.addEventListener('click',()=>{
    humanChoice = 'Scissors';
    humanSelectionEl.textContent = humanChoice;
    playRound();
    
});

function generateComputerChoice(){
    const computerChoice = choice[Math.floor(Math.random() *3)];
    computerSelectionEl.textContent = computerChoice;
    return computerChoice;
}

function roundOutcome(humanChoice, computerChoice){
 if(humanChoice === computerChoice){
    outcome.textContent = "It's a Tie for this Round!"
 } else if(humanChoice === 'Rock' && computerChoice === 'Scissors' ||
 humanChoice === 'Paper' && computerChoice === 'Rock' ||
 humanChoice === 'Scissors' && computerChoice === 'Paper'){
    outcome.textContent = "User Wins this Round!";
    humanScore++;
    document.querySelector('.score-user').textContent = humanScore;
 } else{
    outcome.textContent = "Computer Wins this round";
    computerScore++;
    document.querySelector('.score-computer').textContent = computerScore;
 }
    round++;
    if(round >=5){
        showFinalWinner();
        playing = false;
    }
}

function playRound(){
    if(humanChoice === '')
        return;
    
    const computerChoice = generateComputerChoice();
    roundOutcome(humanChoice,computerChoice);
}

function showFinalWinner(){
    if(humanScore > computerScore){
        resultEl.textContent = 'You win!';
        resultEl.style.backgroundColor = "green";
    } else if(humanScore < computerScore){
        resultEl.textContent = 'You lose!';
        resultEl.style.backgroundColor = ' #9B111E';
    } else{
        resultEl.textContent = 'Tie No winners!';
        resultEl.style.backgroundColor = ' #808080';
    }

}

restart.addEventListener('click',function(){
    humanScore = 0;
    computerScore = 0;
    round = 0;

    humanSelectionEl.textContent = "none";
    computerSelectionEl.textContent = "none";
    outcome.textContent = "";
    // resultEl.style.display = 'none';
    resetButton.style.display = 'none';

    scoreHumanEl.textContent = '0';
    scoreComputerEl.textContent = '0';
    resultEl.backgroundColor = '';
})