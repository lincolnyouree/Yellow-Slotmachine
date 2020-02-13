/*----- constants -----*/

let money = 1000;
let field = ['images/john.png', 'images/paul.png', 'images/george.png', 'images/ringo.png', ''];
const bet = 10;

/*----- cached element references -----*/

let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');

let yaySound = new Audio('../sounds/yay.wav'); 
let booSound = new Audio('../sounds/boo.wav');
let winSong = new Audio('../sounds/song.mp3');
let sadSong = new Audio('../sounds/sad.mp3');
let seaSong = new Audio('../sounds/sea.wav');
let boing = new Audio('../sounds/boing.wav');

let btn = document.getElementById('btn');
let title = document.getElementById('title');
let message = document.getElementById('message');
let betAmount = document.getElementById('money');
let moneyBox = document.getElementById('moneyAmount');

/*----- event listeners -----*/

document.getElementById('btn').addEventListener('click', handleClick);

/*----- functions -----*/

init();

function init() {
    seaSong.play();
    message.textContent = "All Together Now!";
    moneyBox.textContent = "£1000";
}

function checkWinner() {
    if (img1.src === img2.src && img2.src === img3.src && img3.src === img4.src) {
        yaySound.play();
        winSong.play();
        title.classList.add('animated', 'wobble');
        moneyBox.classList.add('animated', 'jackInTheBox');
        message.textContent = "You're bigger than Jesus!";
        money += 1000;
        moneyBox.classList.remove('jackInTheBox');
        title.classList.remove('wobble');
    }  else if (money <= 0) {
        booSound.play();
        sadSong.play();
        title.classList.add('animated', 'wobble');
        message.textContent = 'Thus begins the march of the meanies...';
        moneyBox.classList.remove('wobble');
    } else {
        message.textContent = 'Spin Again!';
    }
}

function handleClick() {
    boing.play();
    if (money >= 10) {
    message.classList.add('animated', 'fadeIn');
    btn.classList.add('animated', 'rubberBand');
    seaSong.play();
    money -= 10;
    checkWinner();
    render();
    setTimeout (function() {
    btn.classList.remove('rubberBand');
    message.classList.remove('fadeIn');
    }, 1000);
}
}

function render() {
    setTimeout(function() {
        let randNum = Math.floor(Math.random() * Math.floor(field.length -1));
        img1.classList.add('animated', 'rubberBand');
        img1.src = field[randNum];
    }, 600);
    setTimeout(function() {
        let randNum2 = Math.floor(Math.random() * Math.floor(field.length -1));
        img2.classList.add('animated', 'bounce');
        img2.src = field[randNum2];
    }, 1200);
    setTimeout(function() {
        let randNum3 = Math.floor(Math.random() * Math.floor(field.length -1));
        img3.classList.add('animated', 'bounce');
        img3.src = field[randNum3];
    }, 1400);
    setTimeout(function() {
        let randNum4 = Math.floor(Math.random() * Math.floor(field.length -1));
        img4.classList.add('animated', 'bounce');
        img4.src = field[randNum4];
    }, 1600);
    moneyBox.textContent = `£${money}`;
    img1.classList.remove('rubberBand');
    img2.classList.remove('bounce');
    img3.classList.remove('bounce');
    img4.classList.remove('bounce');
}