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

// Setting first and second card variables, w sum to see if user wins, loses, or needs to draw more cards

let firstCard = 10
let secondCard = 11
let cards = [firstCard, secondCard] 
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let cardsEl = document.getElementById("cards-el")
let messageEl = document.getElementById("message-el") //References HTML Document
let sumEl = document.getElementById("sum-el")

function startGame(){
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
    let card = 2
    sum += card
    cards.push(card)
    renderGame()
}