alert("Welcome to the number guessing game")

let wagerAmount = parseFloat(prompt("Enter your wagering amount:")) 

while(isNaN(wagerAmount) || wagerAmount <= 0){
    wagerAmount = parseFloat(prompt("Please enter a valid wagering amount (positive number): "))
}
let userGuess = parseInt(prompt("Select a number from 1 - 14"))

while(isNaN(userGuess) || userGuess < 1 || userGuess > 14){
    userGuess = parseInt(prompt("please enter a valid number between 1 - 14"))
}

let outcomeNumber = Math.floor(Math.random() * 14) + 1

if(userGuess === outcomeNumber){
    let winnings = wagerAmount * 14
    alert(`Congratulations! You guessed correctly. \nOutcome Number: ${outcomeNumber} \nYour Guess: ${userGuess} \nWager Amount: R${wagerAmount} \nWinnings: R${winnings}`)
}else{
    alert(`Sorry! You guessed incorrectly. \nOutcome Number: ${outcomeNumber} \nYour Guess: ${userGuess} \nWager Amount: R${wagerAmount} \nWinnings: R0`)
}