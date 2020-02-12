/*----- constants -----*/

let money = 1000;
let field = ['images/john.png', 'images/paul.png', 'images/george.png', 'images/ringo.png', ''];
const bet = 10;

/*----- cached element references -----*/

let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
let betAmount = document.getElementById('money');
let moneyBox = document.getElementById('moneyAmount');
let message = document.getElementById('message');


let yaySound = new Audio('yay.wav'); 
let booSound = new Audio('boo.wav');
let constSong = new Audio('song.mp3');

/*----- event listeners -----*/

document.getElementById('btn').addEventListener('click', handleClick);

/*----- functions -----*/

init();

function init() {
    message.textContent = "Let's Play!";
    moneyBox.textContent = "£1000";
}

function checkWinner() {

    if (img1.src === img2.src && img2.src === img3.src && img3.src === img4.src) {
        yaySound.play();
        message.textContent = 'Congratulations!';
        money += 1000;
    } else if (money <= 0) {
        booSound.play();
        message.textContent = 'Game Over!';
    } else {
        message.textContent = 'Spin Again!';
    }
}

function handleClick() {
    if (money >= 10) {
    money -= 10;
    let randNum = Math.floor(Math.random() * Math.floor(field.length -1));
    img1.src = field[randNum];
    let randNum2 = Math.floor(Math.random() * Math.floor(field.length -1));
    img2.src = field[randNum2];
    let randNum3 = Math.floor(Math.random() * Math.floor(field.length -1));
    img3.src = field[randNum3];
    let randNum4 = Math.floor(Math.random() * Math.floor(field.length -1));
    img4.src = field[randNum4];
    checkWinner();
    render();
    }
}

function render() {
    moneyBox.textContent = `£${money}`;
}

// let count = 0;
// let interval = setInterval(doStuff, 20);

// function doStuff() {
//  count++
//  if (count === 20) {
//    clearInterval(interval);
//  }
// }