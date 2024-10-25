let age = 21
let message = ""

//Checking if User is old enough to enter the Casino

function Entrance(){
    if(age < 21){
        message = "You cannot enter the Casino, you don't meet the age requirement"
    } else {
        message = "Welcome into our Casino, hope you enjoy your stay!"
        window.location.href = "index.html"
    }
}

let cards = [] 
let sum = 0
let hasBlackJack = false
let isAlive = false
let cardsEl = document.getElementById("cards-el")
let messageEl = document.getElementById("message-el") //References HTML Document
let sumEl = document.getElementById("sum-el")

console.log(cards)

function getRandomCard(){ //Allows User to Draw a Random Card between 1 - 13

    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }
}

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

function newCard (){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}