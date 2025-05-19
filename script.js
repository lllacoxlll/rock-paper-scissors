function getComputerChoice() {
  let randomInt = Math.floor(Math.random() * 3)
  if (randomInt === 0) return 'Rock'
  else if (randomInt === 1) return 'Paper'
  else if (randomInt === 2) return 'Scissors'
}

function getHumanChoice() {
  let userChoice = prompt('Rock, Paper, or Scissors?')
  return userChoice
}

function playRound(computerChoice, humanChoice) {
  humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase()

  let winningChoice = {
    Rock: 'Scissors',
    Paper: 'Rock',
    Scissors: 'Paper',
  }

  if (computerChoice === humanChoice) console.log('Tie')
  else if (winningChoice[humanChoice] === computerChoice) {
    humanScore++
    console.log(`You win! ${humanChoice} beats ${computerChoice}`)
  } else {
    computerScore++
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
  }
}

let humanScore = 0
let computerScore = 0

function playGame() {
  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()
    playRound(computerChoice, humanChoice)
  }
  console.log(humanScore)
  console.log(computerScore)
}

playGame()
