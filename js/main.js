/*----- constants -----*/

let money = 100;
let field = [];
const bet = 10;
const results = [1, 2, 3];

/*----- cached element references -----*/

const message = document.getElementById('message');
betAmount = document.getElementById('money');
moneyBox = document.getElementById('moneyAmount');

/*----- event listeners -----*/

document.getElementById('btn').addEventListener('click', handleClick);

function checkWinner() {

    if (field[0] === field[1] && field[2] === field[1]) {
        message.textContent = 'Congratulations';
        money += 100;
    } 
    else {
        message.textContent = 'Spin Again!';
    } 
}

function render() {
    moneyBox.textContent = `$${money}`;
}

function handleClick() {
    if (money >= 10) {
    money -= 10;
    let randNum = Math.floor((Math.random() * 3)) + 1;
    document.getElementById('slotZero').value = randNum; 
    field[0]=(randNum);
    let randNum2 = Math.floor((Math.random() * 3)) + 1;
    document.getElementById('slotOne').value = randNum2; 
    field[1]=(randNum2);
    let randNum3 = Math.floor((Math.random() * 3)) + 1;
    document.getElementById('slotTwo').value = randNum3; 
    field[2]=(randNum3);
    checkWinner();
    render();
    }
}