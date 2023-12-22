//Login
let text = "";
let age = 22;
let isValid = false;

//Before the game starts
let allCard = [];
let sumCard = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

//object syntax - composite or complex datatype (key: value)
let player = {
    name: "JK",
    chips: 100,
    //method - function inside object
    greeting: function() {
        console.log("Welcome");
    }
};

let textEl = document.getElementById("text-el");
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");      //need to specify the type of data
let cardEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");

playerEl.textContent = player.name + ": $" + player.chips;

//Authorization
function checkAge() {
    if (age < 21) {
        text = "You are not allowed here.";
    } else {
        text = "Welcome!";
        isValid = true;
    }

    textEl.textContent = text;
}

//Enter the game
function enterGame() {
    if (isValid === true) {
        location.replace("index.html");
    }
}

//Start game
function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    // allCard.push(firstCard, secondCard);
    allCard = [firstCard, secondCard];
    sumCard = firstCard + secondCard;
    isAlive = true;

    renderGame();
}

//Random cards
function getRandomCard() {
    let randomCard = Math.floor(Math.random()*13) + 1;
    if (randomCard === 1) {
        return randomCard = 11;
    } else if (randomCard > 10) {
        return randomCard = 10;
    } else {
        return randomCard;
    }
}

//Render game
function renderGame() {
    cardEl.textContent = "Cards: ";
    for(let i=0; i<allCard.length; i++) {
        cardEl.textContent += allCard[i] + " ";
    }

    sumEl.textContent = "Sum: " + sumCard;

    //During game
    if(sumCard <= 20) {
        message = "Do you want to draw another card?";
    } else if (sumCard === 21) {
        message = "Congratulation, you've got a blackjack";
        hasBlackJack = true;
    } else {
        message = "Oops, game over";
        isAlive = false;
    }

    messageEl.textContent = message;
}

//New card
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let thirdCard = getRandomCard();
        sumCard += thirdCard;
        allCard.push(thirdCard);
        renderGame();
    }
}

//Cash out

//Log out
function back() {
    location.href = "login.html";
}