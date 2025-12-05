// Uzrakstīt loģiku, pēc kuras dators izvēlēsies akmeni, papīru vai šķēres

function getComputerChoice() {
    let randomNumber = Math.random() // Izveido random skaitli no 0 līdz 1. Ir 3 varianti, ko dators var izvēlēties, tātad skaitlis 1, kas ir maksimālā vērtība,
    let computerChoice
    if (randomNumber <= 1 / 3) { // jādala ar 3. 
        computerChoice = "rock"
    }
    else if (randomNumber >= 2 / 3) {
        computerChoice = "paper"
    }
    else {
        computerChoice = "scissors" // Ja skaitlis ir zem 1/3, tad tiek izvēlētas šķēres.
    }
    return computerChoice
}

function getHumanChoice() { // Izveidot loģiku, pēc kuras cilvēks var izvēlēties akmeni, šķēres vai papīru
    let choice = prompt("Rock, paper or scissors?")
    choice.toLowerCase()
    return choice
}

let humanScore = 0; // deklarējam divus mainīgos, kuri saturēs punktu skaitu.
let computerScore = 0;
let playedGames = 0; // ar šo mainīgo skaitīs, cik spēles ir izspēlētas. Katrs playRound() inkrementē to.

function playRound() {

    computerChoice = getComputerChoice()

    humanChoice = getHumanChoice()
    
    console.log("Dators izvēlās " + computerChoice)

    if (humanChoice === computerChoice) {
        console.log("Neizšķirts")
    }
    else if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock") {
        console.log("Tu zaudēji!")
        computerScore = ++computerScore
    }
    else {
        console.log("Tu uzvarēji!")
        humanScore = ++humanScore
    }
    playedGames = ++playedGames
    console.log(`Šobrīd rezultāts ir ` + humanScore + ` pret ` + computerScore)
}

function playGame() {

    while (playedGames < 5) {
        playRound()
    }

    if (humanScore > computerScore) {
        console.log("Tu uzvarēji šo spēli!")
    } else if (computerScore > humanScore) {
        console.log("Tu zaudēji šo spēli!")
    } else {
        console.log("Neizšķirts!")
    }
}

playGame()

// console.log(computerChoice)
// console.log(humanChoice)

// Vēl noderīgi būtu loop, kamēr tiek ievadīts valid input, bet to es šobrīd nemāku :)



