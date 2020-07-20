var scores, roundScores, activePlayer, win, highestScore ;

scores = [0, 0] ;
roundScores = 0 ;
activePlayer = Math.floor(Math.random()*2) ;

highestScore = 50 ;

var diceDOM = document.getElementById("dice") ;

function reset(){
    document.getElementById("name-0").textContent = "PLAYER 1" ;
    document.getElementById("name-0").style.color = "black" ;
    document.getElementById("name-1").textContent = "PLAYER 2" ;
    document.getElementById("name-1").style.color = "black" ;
    document.getElementById("hide-content").style.display = "block" ;
    document.getElementById("score-0").textContent = 0 ;
    document.getElementById("score-1").textContent = 0 ;
    document.getElementById("current-0").textContent = 0 ;
    document.getElementById("current-1").textContent = 0 ;
    scores = [0, 0] ;
    roundScores = 0 ;
    diceDOM.src = "dice-0.png";
}

document.querySelector("#hide-content").style.display = "none";

function switchPlayer(){
    roundScores = 0 ;
    document.getElementById("current-" + activePlayer).textContent = roundScores ;
    document.getElementById("player-" + activePlayer).classList.add("fade-player") ;
    document.getElementById("player-" + Number(!activePlayer)).classList.remove("fade-player") ;

    activePlayer = Number(!activePlayer) ;
}

function winner(){
    console.log("Winner >> " + win) ;
    document.getElementById("name-" + win).textContent = "WINNER !" ;
    document.getElementById("player-" + win).style.border = "2px solid rgb(248, 138, 47)" ;
}

document.getElementById("new-game").addEventListener("click", function() {
    if(win===0 || win===1){
        document.getElementById("player-" + win).style.border = "none" ;
    }
    highestScore = document.querySelector("input").value ;
    reset() ;
    switchPlayer() ;
}) ;

document.getElementById("hold").addEventListener("click", function() {
    //storing current-score in scores
    scores[activePlayer] += roundScores ;
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer] ;
    diceDOM.src = "dice-0.png";
    // check for scores >= 100
    if(scores[0]>=highestScore){
        win = 0 ;
        winner() ;
    }
    else if(scores[1]>=highestScore){
        win = 1 ;
        winner(0) ;
    }
    else {
    // switch player
    switchPlayer() ;
    }
}) ;

var dice_6 = 0 ;

document.querySelector("#roll-dice").addEventListener("click", function(){
    // random dice number
    dice = Math.floor(Math.random() * 6) + 1 ;
    if(dice===6){
        if(dice===dice_6){
            switchPlayer() ;
        }
        dice_6 = dice ;
    }
    //change img
    diceDOM.src = "dice-" + dice + ".png";
    // check for dice-1
    if(dice===1){
        switchPlayer() ;
    }
    else {
        roundScores += dice ;
    }
    //change current-score board
    document.getElementById("current-" + activePlayer).textContent = roundScores ;
}) ;