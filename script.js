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

computerChoice = getComputerChoice() // Izveidojam globālu mainīgo, kas ir return value no funkcijas get, tas pats line 23

function getHumanChoice() { // Izveidot loģiku, pēc kuras cilvēks var izvēlēties akmeni, šķēres vai papīru
    return prompt("Rock, paper or scissors?")
}

humanChoice = getHumanChoice()

let humanScore = 0; // deklarējam divus mainīgos, kuri saturēs punktu skaitu.
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    switch(humanChoice === "rock") {
        case computerChoice === "rock":
            console.log("Neizšķirts")
            break;
        case computerChoice === "scissors":
            console.log("Tu uzvarēji!")
            break;
        default:
            console.log("Tu zaudēji!")
    }
}

playRound(humanChoice, computerChoice)

// console.log(computerChoice)
// console.log(humanChoice)





