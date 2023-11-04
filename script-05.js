// Questão 5

let numerosPares = 0;
let numerosImpares = 0;
let somaValoresPares = 0;
let somaTotal = 0;

while (true) {
    let numero = parseFloat(prompt("Digite um número (ou 0 para encerrar):"));

    if (numero === 0) {
        break; // Encerra a leitura se o número for zero
    }

    if (numero > 0) {
        somaTotal += numero;
        if (numero % 2 === 0) {
            numerosPares++;
            somaValoresPares += numero;
        } else {
            numerosImpares++;
        }
    }
}

let mediaGeral = somaTotal / (numerosPares + numerosImpares);
let mediaValoresPares = somaValoresPares / numerosPares;

console.log("Quantidade de números pares: " + numerosPares);
console.log("Quantidade de números ímpares: " + numerosImpares);
console.log("Média dos valores pares: " + mediaValoresPares);
console.log("Média geral: " + mediaGeral);