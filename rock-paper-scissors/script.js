console.log('Hello World');

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
        console.clear();
        return getHumanChoice();
    }
};

