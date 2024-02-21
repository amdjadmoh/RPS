const choices=['rock','paper','scissor']
function getComputerChoice() {
    return choices[Math.floor(Math.random()*3)]
}
function getplayerselection(){
    return prompt('Rock or Paper or Scissor').toLowerCase()
}
function pickwinner(p1,p2){
    if (p1==p2) { } 
    else if (p1=='rock' && p2=='paper') { updateScore(false) ;}
    else if (p1=='paper' && p2=='rock') { updateScore(true);}
    else if (p1=='scissor' && p2=='paper') { updateScore(true);}
    else if (p1=='paper' && p2=='scissor') {updateScore(false);}
    else if (p1=='rock' && p2=='scissor') { updateScore(true);}
    else if (p1=='scissor' && p2=='rock') { updateScore(false);}
    else {alert('invalid input')}
    showMove(p1,p2)
}
function updateScore(winner){
if (winner){    
let score=document.querySelector("#playerScore");
score.textContent=parseInt(score.textContent)+1;
} else {
    let score=document.querySelector("#computerScore");
    score.textContent=parseInt(score.textContent)+1;

}
}
function showMove(playerMove,computerMove){
    let Image=document.querySelector(".moves");
  Image.innerHTML = `<img src="img/${playerMove}.png" alt="${playerMove}">`;
  Image.innerHTML += `<img src="img/${computerMove}.png" alt="${computerMove}">`;
}




