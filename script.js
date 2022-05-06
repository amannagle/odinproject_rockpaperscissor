function computerPlay()
{
    let outputs=['Rock','Paper','Scissor']
    let x=Math.floor(Math.random()*3)
    return outputs[x];
}

function playRound(playerselection,x)
{
    playerselection=playerselection.toLowerCase();
    let computer_turn=x().toLowerCase();
    console.log(`computer played ${computer_turn}`)
    if (playerselection === 'rock')
    {
        if (computer_turn === 'rock')
        return("Both have played rock so no one wins")

        else if (computer_turn === 'paper')
        return("You lose Paper beats Rock")

        else
        return("You win Rock beats Scissors")
    }

    else if (playerselection === 'paper')
    {
        if (computer_turn === 'rock')
        return("You win Paper beats Rock")

        else if (computer_turn === 'paper')
        return("Both have played paper so no one wins")

        else
        return ("You lose Scissors beat paper")        
    }

    else{
        if (computer_turn === 'rock')
        return("You lose Rock beats Scissors")

        else if (computer_turn === 'paper')
        return("You win Scissors beat Paper")

        else
        return("Both of you have played Scissors so no one wins") 
    }
}
console.log(playRound('rock',computerPlay));