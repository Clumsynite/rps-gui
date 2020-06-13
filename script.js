let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let history = document.getElementById('history');
let scoreBoard = document.getElementById('score');
let btns = document.querySelectorAll('.play');
let resetDiv = document.getElementById('resetDiv');
let matches = player = computer = 0;

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
        
    }else if(score==1){
        player++;
    }else if(score==-1){
        computer++;
    }
    matches++;
    console.log(result+`\n\nMatches: ${matches} | Wins: ${player} | Losses ${computer} `); 
    let scoreTemp = `Matches: ${matches} | Player: ${player} | Computer: ${computer} `;
    let p = document.createElement('h4');
    let res = document.createTextNode("Round: "+matches+".."+result);
    p.appendChild(res);
    history.insertBefore(p, history.firstChild);
    scoreBoard.textContent = scoreTemp;
    if (player === 5 || computer === 5) {
        let statement = "Don't know what to say";
        if(player === 5){
            statement = `Congratulations! You won this game`;
        }else if(computer === 5) {
            statement = `Oh no! You lost but you can try again`;
        }
        p.style.color = "red";
        p.lastChild.textContent = statement;
        btns.forEach(btn => {btn.disabled = true;})
        let reset = document.createElement('button');
        reset.id = "reset";
        reset.textContent = "New Game";
        resetDiv.appendChild(reset);
        reset.addEventListener('click', () => {
            location.reload();
        });
    }
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

