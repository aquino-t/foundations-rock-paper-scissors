// Função que gera um valor aleatorio entre um valor min e um max
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function getComputerChoice() {
    
    let random = getRandomIntInclusive(1,3);

    if (random === 1) {
        return "Pedra";
    }
    else if (random === 2) {
        return "Papel";
    }
    else {
        return "Tesoura";
    }
    
  }

  let empates = 0;
  let userPoints = 0;
  let machinePoints = 0;

for (i = 0; i < 5; i++) {
    let user = prompt("Pedra, Papel, ou Tesoura?", )
    let computerChoice = getComputerChoice();

    function game() {
        if (user.toLowerCase() == "pedra" && computerChoice == "Pedra") {
            return "Empatou!";
        }
        if (user.toLowerCase() == "papel" && computerChoice === "Pedra") {
            return "Você Venceu!";
        }
        if (user.toLowerCase() == "tesoura" && computerChoice === "Pedra") {
            return "Você Perdeu!";
        }
        if (user.toLowerCase() == "pedra" && computerChoice === "Papel") {
            return "Você Perdeu!";
        }
        if (user.toLowerCase() == "papel" && computerChoice === "Papel") {
            return "Empatou!";
        }
        if (user.toLowerCase() == "tesoura" && computerChoice === "Papel") {
            return "Você Venceu!";
        }
        if (user.toLowerCase() == "pedra" && computerChoice === "Tesoura") {
            return "Você Venceu!";
        }
        if (user.toLowerCase() == "papel" && computerChoice === "Tesoura") {
            return "Você Perdeu!";
        }
        if (user.toLowerCase() == "tesoura" && computerChoice === "Tesoura") {
            return "Empatou!";
        }
    }


    let result = game();
    console.log("Você escolheu" + " " + user);
    console.log("A Maquina escolheu" + " " + computerChoice);
    console.log(result);

    if (result == "Você Venceu!") {
        userPoints++;
    }
    else if (result == "Você Perdeu!") {
        machinePoints++;
    }
    else {
        empates++;
    }

    console.log("Maquina (" + machinePoints + ")" + " X Você (" + userPoints + ")");
}









// function game() {
//     if (user.toLowerCase() == "pedra" && computerChoice == "Pedra") {
//         console.log("Empatou!");
//     }
//     if (user.toLowerCase() == "papel" && computerChoice === "Pedra") {
//         console.log("Você Venceu!");
//     }
//     if (user.toLowerCase() == "tesoura" && computerChoice === "Pedra") {
//         console.log("Você Perdeu!");
//     }
//     if (user.toLowerCase() == "pedra" && computerChoice === "Papel") {
//         console.log("Você Perdeu!");
//     }
//     if (user.toLowerCase() == "papel" && computerChoice === "Papel") {
//         console.log("Empatou!");
//     }
//     if (user.toLowerCase() == "tesoura" && computerChoice === "Papel") {
//         console.log("Você Venceu!");
//     }
//     if (user.toLowerCase() == "pedra" && computerChoice === "Tesoura") {
//         console.log("Você Perdeu!");
//     }
//     if (user.toLowerCase() == "papel" && computerChoice === "Tesoura") {
//         console.log("Você Venceu!");
//     }
//     if (user.toLowerCase() == "tesoura" && computerChoice === "Tesoura") {
//         console.log("Empatou!");
//     }
// }