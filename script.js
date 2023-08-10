const choiceButtons = document.querySelectorAll('[data-choice]');
const userScoreSpan = document.querySelector('#user-score');
const computerScoreSpan = document.querySelector('#pc-score');
const winnerText = document.querySelector('[data-text]');
const winner = document.querySelector('.winner');
let userCounter = 0;
let pcCounter = 0;
const CHOICES = [
    {
        name: 'pedra',
        beats: 'tesoura'
    },
    {
        name: 'papel',
        beats: 'pedra'
    },
    {
        name: 'tesoura',
        beats: 'papel'
    }
]

choiceButtons.forEach(choiceButton => {
    choiceButton.addEventListener('click', e => {
        const choiceName = choiceButton.dataset.choice 
        const choice = CHOICES.find(element => element.name === choiceName)
        makeSelection(choice)
    })
})


function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}


function makeSelection(choice) {
    const computerChoice = randomChoice()
    const youWin = isWinner(choice, computerChoice)
    const computerWin = isWinner(computerChoice, choice)
    

    if (userCounter < 5 && pcCounter < 5) {
        isWinner(choice, youWin)
        isWinner(computerChoice, computerWin)

        if (youWin) {
            incrementScore(userScoreSpan)
            winnerText.innerText = capitalize(choice.name) + ' ganha de ' + capitalize(computerChoice.name) + '. Você Venceu!'
            userCounter++
            }
            else if (computerWin){
                incrementScore(computerScoreSpan)
                winnerText.innerText = capitalize(computerChoice.name) + ' ganha de ' + capitalize(choice.name) + '. Você Perdeu!'
                pcCounter++
            }
            else {
                winnerText.innerText = capitalize(computerChoice.name) + ' é igual a ' + capitalize(choice.name) + '. Empatou!'
            }
    console.log(userCounter)
    console.log(pcCounter)
    }
    else {
        if (userCounter > pcCounter) {
            winner.style.display = 'flex';
            winner.style.color = 'green';
            winner.innerText = 'VITÓRIA!'
        }
        else {
            winner.style.display = 'flex';
            winner.style.color = 'red';
            winner.innerText = 'DERROTA!'
        }
    }
}


function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}


function isWinner(choice, computerChoice) {
    return choice.beats === computerChoice.name
}

function randomChoice() {
    const randomIndex = Math.floor(Math.random() * CHOICES.length)
    return CHOICES[randomIndex]
}
