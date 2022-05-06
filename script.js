let computer_score=0;
let player_score=0;
let computer_turn='';
let player_turn='';
function computerPlay()
{
    let outputs=['Rock','Paper','Scissor']
    let x=Math.floor(Math.random()*3)
    return outputs[x];
}

function playRound(playerselection,x)
{
    // playerselection=playerselection.toLowerCase();
    computer_turn=x();
    console.log(`computer played ${computer_turn}`)
    if (playerselection === 'Rock')
    {
        if (computer_turn === 'Rock')
        return("Both have played rock so no one wins")

        else if (computer_turn === 'Paper')
        {
            computer_score++;
            return("You lose Paper beats Rock")
        }
        else
        {
            player_score++;
            return("You win Rock beats Scissors")
        }
    }

    else if (playerselection === 'Paper')
    {
        if (computer_turn === 'Rock')
        {
        player_score++;
        return("You win Paper beats Rock")
        }
        else if (computer_turn === 'Paper')
        return("Both have played paper so no one wins")

        else
        {
            computer_score++;
            return ("You lose Scissors beat paper");

        }       
    }

    else{
        if (computer_turn === 'Rock')
        {
            computer_score++;
            return("You lose Rock beats Scissors")
        }
        else if (computer_turn === 'Paper')
        {
        player_score++;
        return("You win Scissors beat Paper")
        }
        else
        return("Both of you have played Scissors so no one wins") 
    }
}
function imageclicked(e)
{
    
    let result=''
    if(e.target.tagName == 'P')
    {
    player_turn=e.target.previousElementSibling.id;
    e.target.parentNode.classList.add('clicked');
    }
    else if(e.target.tagName == 'IMG')
    {
    player_turn=e.target.id;
    e.target.parentNode.classList.add('clicked');
    }
    else
    {
        player_turn=e.target.firstChild.id;
        e.target.classList.add('clicked');
    }
    document.querySelector('#player_turn').lastChild.textContent=player_turn;
    x=(playRound(player_turn,computerPlay));
    document.querySelector('#computer_turn').lastChild.textContent=computer_turn;
    const round_result=document.querySelector('.result p')
    round_result.textContent=x;
    const score = document.querySelector('section p');
    // console.log("score is "+score);
    score.textContent = `${player_score}-${computer_score}`
    if(player_score === 5)
    {
        score.textContent = `${player_score}-${computer_score}`;
        alert("You have beaten the computer congrats!!!");
    }
    else if(computer_score === 5)
    {
        score.textContent = `${player_score}-${computer_score}`;
        alert("All hope is dead. The computer has defeated us!!!")
    }
    
}

function removeClass(e)
{
    if (e.propertyName !== 'transform')
    return;
    this.classList.remove('clicked');
}
// console.log(playRound('rock',computerPlay));
const images = document.querySelectorAll('.image')
images.forEach((image)=>{
    image.addEventListener('click',imageclicked);
    image.addEventListener('transitionend',removeClass);
})
