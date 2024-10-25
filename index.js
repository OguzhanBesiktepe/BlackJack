let cards = [] 
let sum = 0
let hasBlackJack = false
let isAlive = false
let cardsEl = document.getElementById("cards-el")
let messageEl = document.getElementById("message-el") //References HTML Document
let sumEl = document.getElementById("sum-el")

//Object listed as Player with a Name, and Money Amount

let player = {
    name:  "Player",
    chips:  500,

}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

//Allows User to Draw a Random Card between 1 - 13

function getRandomCard(){

    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }
}

//Staring Game Functionality

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

//Logic of drawing cards

function renderGame () {

    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum

    if (sum <= 20){
        message = "Do you want another card?"
    } else if (sum === 21){
        message = "Congratulations, here are your Chips!"
        hasBlackJack = true
    } else {
        message = "Sorry, you lose"
        isAlive = false
    }

    messageEl.textContent = message //Stores content in message

}

//Asking Dealer for new Card

function newCard (){
if (isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
}