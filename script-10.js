// Questão 10

function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let resultado = 1;
        let sequencia = [];
        for (let i = numero; i >= 1; i--) {
            resultado *= i;
            sequencia.push(i);
        }
        return {
            resultado: resultado,
            sequencia: sequencia
        };
    }
}

// Definindo o valor inicial A
let A = 5;

// Chamando a função para calcular o fatorial de A
let resultadoFatorial = calcularFatorial(A);

// Imprimindo a sequência e o resultado do fatorial
console.log(A + "! = " + resultadoFatorial.sequencia.join(" X ") + " = " + resultadoFatorial.resultado);
