/*----- constants -----*/

const board = [];
const bet = 10;

/*----- app's state (variables) -----*/


/*----- cached element references -----*/

let slot1 = [];
let slot2 = [];
let slot3 = [];

/*----- event listeners -----*/

document.getElementById('btn').addEventListener('click', click1);
document.getElementById('btn').addEventListener('click', click2);
document.getElementById('btn').addEventListener('click', click3);

/*----- functions -----*/


function click1() {
    let randNum = Math.floor((Math.random() * 3)) + 1;
    document.getElementById('slotOne').value = randNum; 
    slot1.push(randNum);
    randomNum();
    checkWinner();
}


function click2() {
    let randNum = Math.floor((Math.random() * 3)) + 1;
    document.getElementById('slotTwo').value = randNum; 
    slot2.push(randNum);
    randomNum();
    checkWinner();
}


function click3() {
    let randNum = Math.floor((Math.random() * 3)) + 1;
    document.getElementById('slotThree').value = randNum; 
    slot3.push(randNum);
    randomNum();
    checkWinner();
}

// function checkWinner() {
//     if ('slotOne' ==== 'slotTwo' === 'slotThree') {
//         message.textContent = "Congratulations!";
//         winner = true;
//     } else {
//         message.textContent = "Game Over!";
//         winner = false;
//     }
// }



// TIMER

// HTML body: <div id="countdown"></div> 

// JS:

// var timeLeft = 10;

// var timer = setInterval(function(){
// document.getElementById('countdown').innerHTML = timeLeft + ' seconds remaining.'
// timeLeft -= 1; // makes it count down infinitely
// if(timeLeft < 0) {
//     document.getElementById('countdown').innerHTML = 'Finished!'
// }}, 1000); // , 5000 sets 5 second delay - putting nothing implies 0 seconds.



// OTHER IDEAS


/*----- constants -----*/

// const money = 100;
// const board = [];
// const bet = 10; 


// function spin() {
//     Math.random
//     checkForWinner()
// }

// function checkForWinner() {
//     if (x === y === z = turkey picture) {
//         money += bet * turkey multiplier
//     } else {
//         "you suck"
//     }
// } 

