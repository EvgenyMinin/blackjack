import '../sass/style.sass'
let arr = [
    'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'dT', 'dJ', 'dQ', 'dK', 'dA',
    'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'hT', 'hJ', 'hQ', 'hK', 'hA',
    'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'cT', 'cJ', 'cQ', 'cK', 'cA',
    's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 'sT', 'sJ', 'sQ', 'sK', 'sA',
];
let randomCards = arr.slice();
function compareRandom(a, b) {
    return Math.random() - 0.5;
}
randomCards.sort(compareRandom);

let playerCards = document.getElementById('playerCards');
let botCards = document.getElementById('botCards');
let startGame = document.getElementById('startGame');
let addCard = document.getElementById('addCard');
let showCard = document.getElementById('showCard');
let playButtonsBox = document.getElementById('playButtonsBox');
let chipBox = document.getElementById('chipBox')
let botScore = document.getElementById('botScore');
let playerScore = document.getElementById('playerScore');
let bet = document.getElementById('bet');
var chip;
let cash = document.getElementById('cash');
let rebuy = document.getElementById('rebuyButton');
let label1000 = document.getElementById('label1000');
let label500 = document.getElementById('label500');
let label100 = document.getElementById('label100');
let label50 = document.getElementById('label50');
let label25 = document.getElementById('label25');
let label5 = document.getElementById('label5');


rebuy.style.visibility = 'hidden';
label1000.style.visibility = 'hidden';
label500.style.visibility = 'hidden';

startGame.onclick = function() {
    chip = document.querySelector('input[name="chips"]:checked').value;
    bet.innerText = chip;
    botCards.innerHTML = '';
    playerCards.innerHTML = '';
    botScore.innerText = '?';
    playerScore.innerText = '';
    let playerScoreValue = 0;
    startGame.style.visibility = "hidden";
    playButtonsBox.style.visibility = 'visible';
    chipBox.style.visibility = 'hidden';
    addCard.style.visibility = 'visible';
    let firstBoxBotCard = document.createElement('div');
    let firstBotCard = randomCards.pop();
    firstBoxBotCard.className = 'cards ' + firstBotCard;
    botCards.appendChild(firstBoxBotCard);
    let secondBotCard = document.createElement('div');
    secondBotCard.className = 'cards cardBack';
    botCards.appendChild(secondBotCard);

    let firstBoxPlayerCard = document.createElement('div');
    let firstPlayerCard = randomCards.pop();
    firstBoxPlayerCard.className = 'cards ' + firstPlayerCard;
    playerCards.appendChild(firstBoxPlayerCard);
    let secondBoxPlayerCard = document.createElement('div');
    let secondPlayerCard = randomCards.pop();
    secondBoxPlayerCard.className = 'cards ' + secondPlayerCard;
    playerCards.appendChild(secondBoxPlayerCard);

    label1000.style.visibility = 'hidden';
    label500.style.visibility = 'hidden';
    label100.style.visibility = 'hidden';
    label50.style.visibility = 'hidden';
    label25.style.visibility = 'hidden';
    label5.style.visibility = 'hidden';

    for (var i=0;i<playerCards.childNodes.length; i++) {
        switch (playerCards.childNodes[i].className[7]) {
            case '2':
            case 'J':
                playerScoreValue += 2;
                break;
            case '3':
            case 'Q':
                playerScoreValue += 3;
                break;
            case '4':
            case 'K':
                playerScoreValue += 4;
                break;
            case '5':
                playerScoreValue += 5;
                break;
            case '6':
                playerScoreValue += 6;
                break;
            case '7':
                playerScoreValue += 7;
                break;
            case '8':
                playerScoreValue += 8;
                break;
            case '9':
                playerScoreValue += 9;
                break;
            case 'T':
                playerScoreValue += 10;
                break;
            case 'A':
                if (playerScoreValue + 11 > 21) {
                    playerScoreValue += 1;
                } else {
                    playerScoreValue += 11;
                }
                break;
        }
        playerScore.innerText = playerScoreValue;
    }    
}

addCard.onclick = function() {
    let playerScoreValue = 0;
    let div = document.createElement('div');
    let newCard = randomCards.pop();
    div.className = "cards " + newCard;
    playerCards.appendChild(div);
    if (randomCards.length == 0) {
        addCard.style.visibility = 'hidden';
    }
    for (var i=0;i<playerCards.childNodes.length; i++) {
        switch (playerCards.childNodes[i].className[7]) {
            case '2':
            case 'J':
                playerScoreValue += 2;
                break;
            case '3':
            case 'Q':
                playerScoreValue += 3;
                break;
            case '4':
            case 'K':
                playerScoreValue += 4;
                break;
            case '5':
                playerScoreValue += 5;
                break;
            case '6':
                playerScoreValue += 6;
                break;
            case '7':
                playerScoreValue += 7;
                break;
            case '8':
                playerScoreValue += 8;
                break;
            case '9':
                playerScoreValue += 9;
                break;
            case 'T':
                playerScoreValue += 10;
                break;
            case 'A':
                if (playerScoreValue + 11 > 21) {
                    playerScoreValue += 1;
                } else {
                    playerScoreValue += 11;
                }
                break;
        }
        playerScore.innerText = playerScoreValue;
    }
    if (+playerScore.innerText >= 21) {
        addCard.style.visibility = 'hidden';
    }
}

showCard.onclick = function() {
    let botScoreValue = 0;
    playButtonsBox.style.visibility = 'hidden';
    startGame.style.visibility = 'visible';
    chipBox.style.visibility = 'visible';
    addCard.style.visibility = 'hidden';
    botCards.children[1].remove();
    let div2 = document.createElement('div');
    let secondBotCard = randomCards.pop();
    div2.className = 'cards ' +  secondBotCard;
    botCards.appendChild(div2);

    for (var i=0; i<botCards.childNodes.length; i++) {
        switch (botCards.childNodes[i].className[7]) {
            case '2':
            case 'J':
                botScoreValue += 2;
                break;
            case '3':
            case 'Q':
                botScoreValue += 3;
                break;
            case '4':
            case 'K':
                botScoreValue += 4;
                break;
            case '5':
                botScoreValue += 5;
                break;
            case '6':
                botScoreValue += 6;
                break;
            case '7':
                botScoreValue += 7;
                break;
            case '8':
                botScoreValue += 8;
                break;
            case '9':
                botScoreValue += 9;
                break;
            case 'T':   
                botScoreValue += 10;
                break;
            case 'A':
                if (botScoreValue + 11 > 21) {
                    botScoreValue += 1;
                } else {
                    botScoreValue += 11;
                }
                break;
        }
    }
    while (botScoreValue < 15) {
        let newBoxBotCard = document.createElement('div');
        let newBotCard = randomCards.pop();
        newBoxBotCard.className = 'cards ' + newBotCard;
        botCards.appendChild(newBoxBotCard);
        switch (newBoxBotCard.className[7]) {
            case '2':
            case 'J':
                botScoreValue += 2;
                break;
            case '3':
            case 'Q':
                botScoreValue += 3;
                break;
            case '4':
            case 'K':
                botScoreValue += 4;
                break;
            case '5':
                botScoreValue += 5;
                break;
            case '6':
                botScoreValue += 6;
                break;
            case '7':
                botScoreValue += 7;
                break;
            case '8':
                botScoreValue += 8;
                break;
            case '9':
                botScoreValue += 9;
                break;
            case 'T':   
                botScoreValue += 10;
                break;
            case 'A':
                if (botScoreValue + 11 > 21) {
                    botScoreValue += 1;
                } else {
                    botScoreValue += 11;
                }
                break;
        }
    }
    botScore.innerText = botScoreValue;

    if (+playerScore.innerText <= 21 && +playerScore.innerText > botScoreValue) {
        let cashNumber = +cash.innerText;
        let betNumber = +bet.innerText;
        cashNumber += betNumber;
        cash.innerText = cashNumber;
    } else if (botScoreValue > +playerScore.innerText && botScoreValue <= 21) {
        let cashNumber = +cash.innerText;
        let betNumber = +bet.innerText;
        cashNumber -= betNumber;
        cash.innerText = cashNumber;
    } else if (+playerScore.innerText > 21 && botScoreValue <= 21) {
        let cashNumber = +cash.innerText;
        let betNumber = +bet.innerText;
        cashNumber -= betNumber;
        cash.innerText = cashNumber;
    } else if (+playerScore.innerText <= 21 && botScoreValue > 21) {
        let cashNumber = +cash.innerText;
        let betNumber = +bet.innerText;
        cashNumber += betNumber;
        cash.innerText = cashNumber;
    }
    
    if (+cash.innerText >= 1000) {
        label5.style.visibility = 'visible';
        label25.style.visibility = 'visible';
        label50.style.visibility = 'visible';
        label100.style.visibility = 'visible';
        label500.style.visibility = 'visible';
        label1000.style.visibility = 'visible';
    } else if (+cash.innerText >= 500) {
        label5.style.visibility = 'visible';
        label25.style.visibility = 'visible';
        label50.style.visibility = 'visible';
        label100.style.visibility = 'visible';
        label500.style.visibility = 'visible';
    } else if (+cash.innerText >= 100) {
        label5.style.visibility = 'visible';
        label25.style.visibility = 'visible';
        label50.style.visibility = 'visible';
        label100.style.visibility = 'visible';
    } else if (+cash.innerText >= 50) {
        label5.style.visibility = 'visible';
        label25.style.visibility = 'visible';
        label50.style.visibility = 'visible';
    } else if (+cash.innerText >= 25) {
        label5.style.visibility = 'visible';
        label25.style.visibility = 'visible';
    } else if (+cash.innerText >= 5) {
        label5.style.visibility = 'visible';
    } else if (+cash.innerText <= 0) {
        rebuy.style.visibility = 'visible';
        startGame.style.visibility = 'hidden';
    }

    randomCards = [];
    randomCards = arr.slice();
    randomCards.sort(compareRandom);
}

rebuyButton.onclick = function() {
    cash.innerText = '100';
    rebuy.style.visibility = 'hidden';
    startGame.style.visibility = 'visible';
    label5.style.visibility = 'visible';
    label25.style.visibility = 'visible';
    label50.style.visibility = 'visible';
    label100.style.visibility = 'visible';
}