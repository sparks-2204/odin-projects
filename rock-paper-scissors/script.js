console.log('Hello World');

let humanScore = 0,computerScore = 0,drawScore = 0;

let getComputerChoice = () =>{
    let choice = Math.floor(Math.random()*3)+1;
    if(choice === 1){
        return 'rock';
    }else if (choice === 2){
        return 'paper';
    }else if (choice === 3){
        return 'scissors';
    }
};

// console.log(getComputerChoice());

let getHumanChoice = () =>{
    let humanInput = prompt('What is your choice ? [rock, paper, scissors]');
    humanInput = humanInput.toLowerCase();
    if(humanInput==='rock'){
        return 'rock';
    }else if(humanInput === 'paper'){
        return 'paper';
    }else if(humanInput === 'scissors'){
        return 'scissors';
    }else{
        console.log('Your choice was wrong. Try again');
        // console.clear();
        return getHumanChoice();
    }
};

let playRound = (humanChoice,computerChoice) =>{
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if(humanChoice===computerChoice){
        console.log("That's a draw!");
        drawScore += 1;
    }else{
        if(humanChoice === 'rock'){
            if(computerChoice === 'paper'){
                console.log("You lose!Paper beats Rock");
                computerScore += 1;
            }else if(computerChoice === 'scissors'){
                console.log("You win!Rock beats Scissors");
                humanScore += 1;
            }
        }else if(humanChoice === 'paper'){
            if(computerChoice === 'rock'){
                console.log("You win!Paper beats Rock");
                humanScore += 1;
            }else if(computerChoice === 'scissors'){
                console.log("You lose!Scissors beats Paper");
                computerScore += 1;
            }
        }else if(humanChoice === 'scissors'){
            if(computerChoice === 'paper'){
                console.log("You win!Scissors beats Paper");
                humanScore += 1;
            }else if(computerChoice === 'rock'){
                console.log("You lose!Rock beats Scissors");
                computerScore += 1;
            }
        }
    }
};
function playGame(){
    for(let i=0;i<5;i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
        console.log(`
            -----------Round - ${i+1}-----------
                      -----Score-----
                Human Score - ${humanScore}
                Computer Score - ${computerScore}
                    Draws - ${drawScore}
            `);
    }
}

playGame();


