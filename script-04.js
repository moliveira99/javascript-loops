// Questão 4

function contarIntervalos() {
    let intervalo1 = 0;
    let intervalo2 = 0;
    let intervalo3 = 0;
    let intervalo4 = 0;

    while (true) {
        let numero = prompt("Digite um número (um número negativo para encerrar):");
        numero = parseInt(numero);

        if (numero < 0) {
            break;
        } else if (numero >= 0 && numero <= 25) {
            intervalo1++;
        } else if (numero >= 26 && numero <= 50) {
            intervalo2++;
        } else if (numero >= 51 && numero <= 75) {
            intervalo3++;
        } else if (numero >= 76 && numero <= 100) {
            intervalo4++;
        }
    }

    return {
        "Intervalo [0-25]": intervalo1,
        "Intervalo [26-50]": intervalo2,
        "Intervalo [51-75]": intervalo3,
        "Intervalo [76-100]": intervalo4
    };
}

// Exemplo de uso da função
let resultado = contarIntervalos();
console.log("Quantidade de números no intervalo [0-25]: " + resultado["Intervalo [0-25]"]);
console.log("Quantidade de números no intervalo [26-50]: " + resultado["Intervalo [26-50]"]);
console.log("Quantidade de números no intervalo [51-75]: " + resultado["Intervalo [51-75]"]);
console.log("Quantidade de números no intervalo [76-100]: " + resultado["Intervalo [76-100]"]);