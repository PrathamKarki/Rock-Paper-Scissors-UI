let userScore = 0;
let computerScore = 0;
let currentRound = 0;
let humanChoice = '';
const rockEl = document.querySelector('.rock');
const paperEl = document.querySelector('.paper');
const scissorsEl = document.querySelector('.scissors');
const userSelectionEl = document.querySelector('#user-selection');
const computerSelectionEl = document.querySelector('#computer-selection');
const outcome = document.querySelector('.outcome');
const choice = ['Rock','Paper','Scissors'];
const resultEl = document.querySelector('.result');
const restart = document.querySelector('.reset-btn');
const scoreComputerEl = document.querySelector('.score-computer');
const scoreUserEl = document.querySelector('.score-user');
const roundEl = document.querySelector('.round-count')
let isPlaying = true;  // flag to stop game after 5 rounds

rockEl.addEventListener('click',function(){
    if(isPlaying){
    humanChoice = 'Rock';
    userSelectionEl.textContent = humanChoice;
    playRound(humanChoice);
    }
});

paperEl.addEventListener('click',function(){
    if(isPlaying){
    humanChoice = 'Paper';
    userSelectionEl.textContent = humanChoice;
    playRound(humanChoice);
    }

});

scissorsEl.addEventListener('click', function(){
    if(isPlaying){
    humanChoice = 'Scissors';
    userSelectionEl.textContent = humanChoice;
    playRound(humanChoice);
    }
   
})

function computerChoice(){
    if(isPlaying){
    const comChoice =  choice[Math.floor(Math.random() * 3)];
    computerSelectionEl.textContent = comChoice;
    return comChoice;
    }
}





function playRound(humanChoice){
        const computerChoiceOutcome = computerChoice();
    if(humanChoice === computerChoiceOutcome){
        outcome.textContent = `It's a tie for this Round!`
    } else if(humanChoice === 'Rock' && computerChoiceOutcome === 'Scissors' ||
        humanChoice === 'Paper' && computerChoiceOutcome === 'Rock' || humanChoice === 'Scissors' && computerChoiceOutcome ==='Paper'){
            outcome.textContent = `Human Wins this Round!`
            userScore++;
            scoreUserEl.textContent = userScore;

        }  else{
            outcome.textContent = `Computer Wins this Round!`
            computerScore++;
            scoreComputerEl.textContent = computerScore;

        }
    currentRound++;
    roundEl.textContent = currentRound;

    if(currentRound === 5){
        isPlaying = false;
        if(userScore > computerScore){
            resultEl.textContent = `Human wins the game in overall.`
            resultEl.style.backgroundColor = '#28a745';
        } else if(computerScore > userScore){
            resultEl.textContent = `Computer wins the game in overall.`
            resultEl.style.backgroundColor = '#800000'
        } else if(userScore === computerScore){
            resultEl.textContent = `It a tie for overall game!`
            resultEl.style.backgroundColor = '#777';
        }

    }

}

restart.addEventListener('click', function(){
    isPlaying = true;
    userScore = 0;
    computerScore = 0;
    currentRound = 0;
    humanChoice = '';
     resultEl.textContent = `Winner is...`
     resultEl.style.backgroundColor = '';
     userSelectionEl.textContent = humanChoice;
     computerSelectionEl.textContent = ''; 
     outcome.textContent = '';
     roundEl.textContent = currentRound; 
     scoreUserEl.textContent = userScore; 
     scoreUserEl.textContent = userScore; 
})
