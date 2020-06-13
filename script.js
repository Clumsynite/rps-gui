let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let history = document.getElementById('history');
let scoreBoard = document.getElementById('score');

let matches = win = loss = draw = 0;

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * (3-1+1)) + 1;
    let move = "";
    (randomNumber==1)?move="rock":(randomNumber==2)?move =  "paper": move =  "scissors" ;
    return move;
}

function playRound (computerSelection, playerSelection) {
    if (computerSelection === playerSelection){
        return "It's a tie";
    } else if(computerSelection==='rock' && playerSelection==='paper') {
        return "You Win! Paper beats Rock";
    } else if(computerSelection==='rock' && playerSelection==='scissors') {
        return "You Lose! Rock beats Scissors";
    } else if(computerSelection==='paper' && playerSelection==='rock') {
        return "You Lose! Paper beats Rock";
    } else if(computerSelection==='paper' && playerSelection==='scissors') {
        return "You Win! Scissors beats Paper";
    } else if(computerSelection==='scissors' && playerSelection==='paper') {
        return "You Lose! Scissors beat Paper";
    } else if(computerSelection==='scissors' && playerSelection==='rock') {
        return "You Win! Rock beats Scissors";
    }   
}

function status (playerSelection, computerSelection){
    if (playerSelection === computerSelection) return 0;
    if (playerSelection==='rock' && computerSelection==='scissors' || 
    playerSelection==='paper' && computerSelection==='rock' || playerSelection==='scissors' && computerSelection==='paper'){
        return 1;
    } else {
        return -1;
    }
    
}

function game(computerSelection, playerSelection) {
    let result = playRound(computerSelection, playerSelection);
    let score = status(playerSelection, computerSelection);
    if(score==0){
        draw++;
    }else if(score==1){
        win++;
    }else if(score==-1){
        loss++;
    }
    matches++;
    console.log(result+"\n\nMatches: "+(matches)+"\nWin: "+win+"\nLosses: "+loss+"\nDraws: "+draw); 
    let scoreTemp = `Matches: ${matches} | Wins: ${win} | Losses ${loss} | Draw : ${draw}`;
    let p = document.createElement('h4');
    let res = document.createTextNode("Round: "+matches+".."+result);
    p.appendChild(res);
    history.insertBefore(p, history.firstChild);
    scoreBoard.textContent = scoreTemp;
}

rock.addEventListener('click', () => {
    game(computerPlay(), rock.id);
});
paper.addEventListener('click', () => {
    game(computerPlay(), paper.id);
});
scissors.addEventListener('click', () => {
    game(computerPlay(), scissors.id);
});

