/*----- constants -----*/

let money = 500;
let field = ['images/john.png', 'images/paul.png', 'images/george.png', 'images/ringo.png', ''];
const bet = 10;

/*----- cached element references -----*/

const john = document.getElementById('img1');
const paul = document.getElementById('img2');
const george = document.getElementById('img3');
const ringo = document.getElementById('img4');

const yaySound = new Audio('../sounds/yay.wav'); 
const booSound = new Audio('../sounds/boo.wav');
const winSong = new Audio('../sounds/song.mp3');
const sadSong = new Audio('../sounds/sad.mp3');
const seaSong = new Audio('../sounds/sea.wav');
const boing = new Audio('../sounds/boing.wav');

const btn = document.getElementById('btn');
const title = document.getElementById('title');
const message = document.getElementById('message');
const betAmount = document.getElementById('money');
const moneyBox = document.getElementById('moneyAmount');

/*----- event listeners -----*/

btn.addEventListener('click', handleClick);

/*----- functions -----*/

init();

function init() {
    message.textContent = "All Together Now!";
    moneyBox.textContent = "£500";
};

function handleClick() {
    boing.play();
    if (money >= 10) {
    message.classList.add('animated', 'fadeIn');
    btn.classList.add('animated', 'rubberBand');
    seaSong.play();
    money -= 10;
    render();
    winnerDelay();
    setTimeout (function() {
        btn.classList.remove('rubberBand');
        message.classList.remove('fadeIn');
    }, 1000);
}
}
function winnerDelay(){
    setTimeout(() => {
        checkWinner();
    }, 1700);
}
function render() {
    setTimeout(function() {
        let randNum = Math.floor(Math.random() * Math.floor(field.length -1));
        john.classList.add('animated', 'rubberBand');
        john.src = field[randNum];
    }, 600);
    setTimeout(function() {
        let randNum2 = Math.floor(Math.random() * Math.floor(field.length -1));
        paul.classList.add('animated', 'bounce');
        paul.src = field[randNum2];
    }, 1200);
    setTimeout(function() {
        let randNum3 = Math.floor(Math.random() * Math.floor(field.length -1));
        george.classList.add('animated', 'bounce');
        george.src = field[randNum3];
    }, 1400);
    setTimeout(function() {
        let randNum4 = Math.floor(Math.random() * Math.floor(field.length -1));
        ringo.classList.add('animated', 'bounce');
        ringo.src = field[randNum4];
    }, 1600);
    moneyBox.textContent = `£${money}`;
    john.classList.remove('rubberBand');
    paul.classList.remove('bounce');
    george.classList.remove('bounce');
    ringo.classList.remove('bounce');
}

function checkWinner() {
    if (john.src === george.src && george.src === ringo.src && ringo.src === paul.src) {
        yaySound.play();
        winSong.play();
        console.log('all same')
        title.classList.add('animated', 'wobble');
        moneyBox.classList.add('animated', 'jackInTheBox');
        message.textContent = "Congratulations!";
        money += 100;
        moneyBox.classList.remove('jackInTheBox');
        title.classList.remove('wobble');
    } 
    if (john.src != paul.src && john.src != ringo.src && john.src != george.src && paul.src != ringo.src && paul.src != george.src && ringo.src != george.src) {
        console.log('4 diff')
        yaySound.play();
        winSong.play();
        title.classList.add('animated', 'wobble');
        moneyBox.classList.add('animated', 'jackInTheBox');
        message.textContent = "You're Bigger than Jesus!";
        money += 1000;
        moneyBox.classList.remove('jackInTheBox');
        title.classList.remove('wobble');
    } else if (money <= 0) {
        booSound.play();
        sadSong.play();
        title.classList.add('animated', 'wobble');
        message.textContent = 'Thus begins the march of the meanies...';
        moneyBox.classList.remove('wobble');
    } else {
        message.textContent = 'Spin Again!';
    }
}