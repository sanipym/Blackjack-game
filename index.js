
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
// 1. Declare a variable called message and assign its value to an empty string
let message = ""
let messageEl =document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")

let player ={
    name: "Per",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": " + player.chips

// 1. Create a function, getRandomCard(), that always returns the number 5

function getRandomCard(){
    //return 5
    // if 1     -> return 11
    // if 11-13 -> return 10
    let rendomNumber = Math.floor(Math.random() * 13) + 1
    console.log(rendomNumber)
    if (rendomNumber == 1){
        return 11
    }else if(rendomNumber > 10){
        return 10
    }else{
        return rendomNumber
    }    
}

// Create a new function called startGame() that calls renderGame()
function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}

function renderGame(){
    // 2. Reassign the message variable to the string we're logging out
    //Render the cars on the page using this format -> "Cards: 10 4"
    //cardsEl.textContent =  "Cards: "+ cards[0] + " " + cards[1]
    cardsEl.textContent = "Cards: "
    for(let i=0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "

    }
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
    // 1. Create a card variable, and hard code its value to a number (2-11)
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
   
}