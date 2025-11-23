let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
// 1. Declare a variable called message and assign its value to an empty string
let message = ""
let messageEl =document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")
function start(){
    // 2. Reassign the message variable to the string we're logging out
    //Render the cars on the page using this format -> "Cards: 10 4"
    cardsEl.textContent =  "Cards: "+ firstCard + " " + secondCard
    sumEl.textContent = sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }

    // 3. Log it out!
    console.log(message)
   messageEl.textContent = message
}
// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"
function newCard(){
    console.log("Drawing a new card from the deck!")
}