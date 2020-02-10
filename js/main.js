/*----- constants -----*/

const money = 100;
let field = [];
const bet = 10;

/*----- app's state (variables) -----*/

/*----- cached element references -----*/

const message = document.getElementById('message');

slot1 = document.getElementById('slotOne');
slot2 = document.getElementById('slotTwo');
slot3 = document.getElementById('slotThree');
betAmount = document.getElementById('money');

/*----- event listeners -----*/

document.getElementById('btn').addEventListener('click', handleClick);
// document.getElementById('btn').addEventListener('click', click2);
// document.getElementById('btn').addEventListener('click', click3);

/*----- functions -----*/

// function render() {
// 	renderHands();
// 	renderControls();
// 	if (winner) {
// 		renderWinnerMessage();
// 	} else {
// 		renderTurnMessage();
// 	}
// }



// initializeSlots();
// initializeMoney();

// function initializeSlots() {
//     board = ['null', 'null', 'null'];
//     message.textContent = "Spin!";
// }

// function initializeMoney() {
//     $("#money").text("$" + " " + money);
// }

// function spin() {
//     let randNum = Math.floor((Math.random() * 3)) + 1;
//     document.getElementById('slotOne', 'slotTwo', 'slotThree').value = randNum; 
//     slot1.push(randNum);
//     randomNum();
//     checkWinner();
// }

function checkWinner() {
    if (field[0] === field[1] && field[2] === field[1]) {
        console.log('WIN WORKS');
        message.textContent = 'Congratulations';
    } 
    else {
        message.textContent = 'Game Over!';
    }
    
}

// function jackpot() {
//     message.textContent = "Congratulations!";
// }

// function gameOver() {
//     message.textContent = "Game Over!";
// }

// function checkWinner() {
//     if (slot1 ==== 1 && slot2 === 1 && slot3 === 1) {
//         message.textContent = "Congratulations!";
//         jackpot = true;
//     } if (slot1 ==== 2 && slot2 === 2 && slot3 === 2) {
//         message.textContent = "Congratulations!";
//         jackpot = true;
//     } if (slot1 ==== 3 && slot2 === 3 && slot3 === 3) {
//         message.textContent = "Congratulations!";
//         jackpot = true;
//     } else {
//         return gameOver();
//     }
// }



function handleClick() {
    let randNum = Math.floor((Math.random() * 3)) + 1;
    document.getElementById('slotOne').value = randNum; 
    field[0]=(randNum);
    let randNum2 = Math.floor((Math.random() * 3)) + 1;
    document.getElementById('slotTwo').value = randNum2; 
    field[1]=(randNum2);
    let randNum3 = Math.floor((Math.random() * 3)) + 1;
    document.getElementById('slotThree').value = randNum3; 
    field[2]=(randNum3);
    checkWinner();
}

// function click2() {
//     let randNum = Math.floor((Math.random() * 3)) + 1;
//     document.getElementById('slotTwo').value = randNum; 
//     slot2.push(randNum);
//     randomNum();
//     checkWinner();
// }

// function click3() {
//     let randNum = Math.floor((Math.random() * 3)) + 1;
//     document.getElementById('slotThree').value = randNum; 
//     slot3.push(randNum);
//     randomNum();
//     checkWinner();
// }







// TIMER

// HTML body: <div id="countdown"></div> 

// JS:

// var timeLeft = 10;

// var timer = setInterval(function(){
// document.getElementById('countdown').innerHTML = timeLeft + ' seconds remaining.'
// timeLeft -= 1; // makes it count down infinitely
// if(timeLeft < 0) {
//     document.getElementById('countdown').innerHTML = 'LET'S GO!'
// }}, 1000); // , 5000 sets 5 second delay - putting nothing implies 0 seconds.

