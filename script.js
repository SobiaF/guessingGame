const randomNumber = Math.floor(Math.random() * 10) + 1
console.log('Random Number', randomNumber)

let guessesRemaining  = 3;

function checkGuess() {
    let myGuess = guess.value
    if (myGuess === randomNumber) {
        feedback.textContent = "Yay you got the number right!"
    } else if (myGuess > randomNumber) {
        feedback.textContent = myGuess + " smaller"
    } else if (myGuess < randomNumber) {
        feedback.textContent = myGuess + " larger"
    }
    guessesRemaining--;
    if (guessesRemaining < 0) {
        feedback.textContent = "You're out of chances. The random number was "
            + randomNumber
    }
    console.log(guessesRemaining)
}


