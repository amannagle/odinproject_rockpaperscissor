console.log("I am groot")
function computerPlay()
{
    let outputs=['Rock','Paper','Scissor']
    let x=Math.floor(Math.random()*3)
    return outputs[x];
}
console.log(computerPlay())