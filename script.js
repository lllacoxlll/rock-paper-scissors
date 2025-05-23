let humanScore = 0
let computerScore = 0

function getComputerChoice() {
  let randomInt = Math.floor(Math.random() * 3)
  if (randomInt === 0) return 'Rock'
  else if (randomInt === 1) return 'Paper'
  else if (randomInt === 2) return 'Scissors'
}

function playRound(humanChoice, computerChoice) {
  let winningChoice = {
    Rock: 'Scissors',
    Paper: 'Rock',
    Scissors: 'Paper',
  }

  if (computerChoice === humanChoice) return 'Tie'
  else if (winningChoice[humanChoice] === computerChoice) {
    humanScore++
    return `You win! ${humanChoice} beats ${computerChoice}`
  } else {
    computerScore++
    return `You lose! ${computerChoice} beats ${humanChoice}`
  }
}

function playGame() {
  let body = document.querySelector('body')

  let rockBtn = document.createElement('button')
  const rockText = document.createTextNode('Rock')
  rockBtn.value = 'Rock'
  rockBtn.appendChild(rockText)
  body.appendChild(rockBtn)

  let paperBtn = document.createElement('button')
  const paperText = document.createTextNode('Paper')
  paperBtn.value = 'Paper'
  paperBtn.appendChild(paperText)
  body.appendChild(paperBtn)

  let scissorsBtn = document.createElement('button')
  const scissorsText = document.createTextNode('Scissors')
  scissorsBtn.value = 'Scissors'
  scissorsBtn.appendChild(scissorsText)
  body.appendChild(scissorsBtn)

  let newDiv = document.createElement('div')
  body.appendChild(newDiv)

  let buttons = document.querySelectorAll('button')

  buttons.forEach((button) => {
    button.addEventListener('click', function toReturn() {
      newDiv.innerHTML = playRound(button.value, getComputerChoice())
      newDiv.innerHTML += '<br>Your score: ' + humanScore + " Computer's score: " + computerScore
      if (humanScore === 5) {
        newDiv.innerHTML += '<br>You are the winner!'
      } else if (computerScore === 5) {
        newDiv.innerHTML += '<br>Sorry, try again next time!'
      }
      if (humanScore === 5 || computerScore === 5) {
        humanScore = 0
        computerScore = 0
      }
    })
  })
}

playGame()
