let age = 21
let message = ""

//Checking if User is old enough to enter the Casino

function Entrance(){
    if(age < 21){
        message = "You cannot enter the Casino, you don't meet the age requirement"
    } else {
        message = "Welcome into our Casino, hope you enjoy your stay!"
    }
}

// Setting first and second card variables, w sum to see if user wins, loses, or needs to draw more cards

let firstCard = 11
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

//Logic of drawing cards

function startGame () {

    if (sum <= 20){
        message = "Do you want another card? 🙂"
    } else if (sum === 21){
        message = "Congratulations, here are your Chips 🥳"
        hasBlackJack = true
    } else {
        message = "Sorry, you lose 😭"
        isAlive = false
    }
    
    console.log(message)

}
