var numArray = [];
var numArray2 = [];
var numArray3 = [];
var colorList = ['red', 'orange', 'yellow', 'green', 'blue'];
var sum = 0;

// to make numbers random 

function handleClick() {
    let randNum = Math.floor((Math.random() * 3)) + 1;
    document.getElementById('numberBox').value = randNum; 
    numArray.push(randNum);
    randomNum();
    sum += randColor;
    document.getElementById('sum').textContent = sum;
}

// to make colors random - very similar to numbers

function randomColor() {
    let randIdx = Math.floor((Math.random() * 5)) + 1;
    let randColor = colorList[randIdx];
    document.getElementById('numberBox').style.color = randColor;
    return randColor;
}

document.getElementById('btn').addEventListener('click', handleClick);

// challenge: everytime you hit random number add a div to the page 



///////////////////////////////////////////////////////////////////////////



function handleClick2() {
    let randNum = Math.floor((Math.random() * 3)) + 1;
    document.getElementById('numberBox2').value = randNum; 
    numArray2.push(randNum);
    randomNum();
    sum += randColor;
    document.getElementById('sum').textContent = sum;
}



function randomColor() {
    let randIdx = Math.floor((Math.random() * 5)) + 1;
    let randColor = colorList[randIdx];
    document.getElementById('numberBox2').style.color = randColor;
    return randColor;
}

document.getElementById('btn').addEventListener('click', handleClick2);

//////////////////////////////////////////////////////////////////////

function handleClick3() {
    let randNum = Math.floor((Math.random() * 3)) + 1;
    document.getElementById('numberBox3').value = randNum; 
    numArray3.push(randNum);
    randomNum();
    sum += randColor;
    document.getElementById('sum').textContent = sum;
}



function randomColor() {
    let randIdx = Math.floor((Math.random() * 5)) + 1;
    let randColor = colorList[randIdx];
    document.getElementById('numberBox3').style.color = randColor;
    return randColor;
}

document.getElementById('btn').addEventListener('click', handleClick3);


























// Random Number Generator

// HTML body: <input id="inputBox" type="text" value=""></input>
    // <br><br>
    // <button id="btn">Random (1-100)</button>
    // <br><br>
    // <div id="sum">0</div>

// CSS:

// #numberBox {
//     height: 100px;
//     width: 100px;
//     font-size: 30px;
//     text-align: center;
// }

// div {
//     height: 100px;
//     width: 100px;
//     font-size: 30px;
//     text-align: center;
//     border: 1px solid;
//     line-height: 100px; /* centers the content when the same as your width */
// }

// JS

// var numArray = [];
// var colorList = ['red', 'orange', 'yellow', 'green', 'blue'];
// var sum = 0;

// to make numbers random 

// function handleClick() {
//     let randNum = Math.floor((Math.random() * 100)) + 1;
//     document.getElementById('numberBox').value = randNum; 
//     numArray.push(randNum);
//     randomColor();
//     sum += randNum;
//     document.getElementById('sum').textContent = sum;
// }

// // to make colors random - very similar to numbers

// function randomColor() {
//     let randIdx = Math.floor((Math.random() * 5)) + 1;
//     let randColor = colorList[randIdx];
//     document.getElementById('numberBox').style.color = randColor;
//     return randColor;
// }

// document.getElementById('btn').addEventListener('click', handleClick);

//// challenge: everytime you hit random number add a div to the page 


// TIMER

// HTML body: <div id="countdown"></div> 

// JS:

//var timeLeft = 10;

// var timer = setInterval(function(){
// document.getElementById('countdown').innerHTML = timeLeft + ' seconds remaining.'
// timeLeft -= 1; // makes it count down infinitely
// if(timeLeft < 0) {
//     document.getElementById('countdown').innerHTML = 'Finished!'
// }}, 1000); // , 5000 sets 5 second delay - putting nothing implies 0 seconds.


/*----- constants -----*/

// const money = 100;
// const board = [];
// const bet = 10; 

// /*----- app's state (variables) -----*/


// /*----- cached element references -----*/

// const slot1 = document.getElementById('slotOne');
// const slot2 = document.getElementById('slotTwo');
// const slot3 = document.getElementById('slotThree');
// const spin = document.getElementById('btn');


// /*----- event listeners -----*/

// document.getElementById('btn').addEventListener('click', spin);

// /*----- functions -----*/

// function spin() {
//     let randNum = Math.floor((Math.random() * 100)) + 1;
//     document.getElementById(board).value = randNum; 
//     randNum.push(slot1);
//     randomNum();
//     sum += randColor;
//     document.getElementById('sum').textContent = sum;
// }

// function randomColor() {
//     let randIdx = Math.floor((Math.random() * 5)) + 1;
//     let randColor = colorList[randIdx];
//     document.getElementById('slotOne').style.color = randColor;
//     return randColor;
// }

// document.getElementById('btn').addEventListener('click', handleClick);





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

