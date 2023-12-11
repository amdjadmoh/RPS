const choices=['rock','paper','scissor']
function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)]
}
function getplayerselection(){
    return prompt('Rock or Paper or Scissor').toLowerCase()
}
function pickwinner(p1,p2){
    if (p1==p2) {alert('you both picked '+p1+' Draw') } 
    else if (p1=='rock' && p2=='paper') { alert('computer picked paper , you won')}
    else if (p1=='paper' && p2=='rock') { alert('computer picked rock , you lost')}
    else if (p1=='scissor' && p2=='paper') { alert('computer picked paper , you won')}
    else if (p1=='paper' && p2=='scissor') { alert('computer picked scissor , you lost')}
    else if (p1=='rock' && p2=='scissor') { alert('computer picked scissor , you won')}
    else if (p1=='scissor' && p2=='rock') { alert('computer picked rock , you lost')}
    else {alert('invalid input')}
}
function start(){
    pickwinner(getplayerselection(),getComputerChoice())
}

