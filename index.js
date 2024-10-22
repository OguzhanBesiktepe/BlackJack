// Setting first and second card variables, w sum to see if user wins, loses, or needs to draw more cards

let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard

console.log(sum)

//Logic of drawing cards

if (sum < 21) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21){
    console.log("You win! 🥳")
} else if (sum > 21) {
    console.log("Sorry you drew over 21, you lose! 😭")
}
