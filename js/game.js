const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const your_choice = document.getElementById('your-choice')
const computer_choice = document.getElementById('computer-choice')
const result = document.getElementById('result')

// get user choices

rock.addEventListener('click', function (e) {
  var value = randomChoice()
  your_choice.innerHTML = 'Rock'
  if (value == 'Rock') {
    result.innerHTML = 'It is a draw'
  } else if (value == 'Paper') {
    result.innerHTML = 'OOps you lose'
  } else {
    result.innerHTML = 'Yeeeh you won'
  }
  computer_choice.innerHTML = value
})

paper.addEventListener('click', function (e) {
  var value = randomChoice()
  your_choice.innerHTML = 'Paper'
  if (value == 'Paper') {
    result.innerHTML = 'It is a draw'
  } else if (value == 'Scissors') {
    result.innerHTML = 'OOps you lose'
  } else if (value === 'Rock') {
    result.innerHTML = 'Yeeeh you won'
  }
  computer_choice.innerHTML = value
})

scissors.addEventListener('click', function (e) {
  var value = randomChoice()
  your_choice.innerHTML = 'Scissors'
  if (value === 'Scissors') {
    result.innerHTML = 'It is a draw'
  } else if (value === 'Rock') {
    result.innerHTML = 'OOps you lose'
  } else if (value === 'Paper') {
    result.innerHTML = 'Yeeeh you won'
  }
  computer_choice.innerHTML = value
})

function randomChoice() {
  const randomValue = Math.floor(Math.random() * 3)
  if (randomValue === 0) {
    return 'Rock'
  } else if (randomValue === 1) {
    return 'Paper'
  } else if (randomValue === 2) {
    return 'Scissors'
  }
}
