/*----- constants -----*/

let money = 1000;
let field = ['images/john.png', 'images/paul.png', 
'images/george.png', 'images/ringo.png', ''];
const bet = 10;


/*----- cached element references -----*/

const message = document.getElementById('message');
const slotZero = document.getElementById('slotZero');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
let betAmount = document.getElementById('money');
let moneyBox = document.getElementById('moneyAmount');

/*----- event listeners -----*/

document.getElementById('btn').addEventListener('click', handleClick);

/*----- functions -----*/

function checkWinner() {

    if (img1.src === img2.src && img2.src === img3.src && img3.src === img4.src) {
        message.textContent = 'Congratulations';
        money += 100;
    } 
    else {
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