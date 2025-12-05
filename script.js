// Uzrakstīt loģiku, pēc kuras dators izvēlēsies akmeni, papīru vai šķēres

function getComputerChoice() {
    let randomNumber = Math.random() // Izveido random skaitli no 0 līdz 1. Ir 3 varianti, ko dators var izvēlēties, tātad skaitlis 1, kas ir maksimālā vērtība,
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
    return choice
}

let humanScore = 0; // deklarējam divus mainīgos, kuri saturēs punktu skaitu.
let computerScore = 0;


function playRound() {

    computerChoice = getComputerChoice()

    humanChoice = getHumanChoice()

    if (humanChoice === computerChoice) {
        console.log("Neizšķirts")
    }
    else if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock") {
        console.log("Tu zaudēji!")
        computerScore = ++computerScore
    }
    else {
        console.log("Tu uzvarēji!")f
        humanScore = ++humanScore
    }
    console.log(`Šobrīd rezultāts ir ` + humanScore + ` pret ` + computerScore)
}


// console.log(computerChoice)
// console.log(humanChoice)





