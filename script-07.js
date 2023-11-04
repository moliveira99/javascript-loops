// Questão 7

function calcularTabuada() {
    let N = prompt("Digite um valor para N (de 1 a 10):");
    N = parseInt(N);

    if (N < 1 || N > 10) {
        console.log("O valor de N deve estar entre 1 e 10.");
        return;
    }

    for (let i = 0; i <= 10; i++) {
        let resultado = i * N;
        console.log(i + " x " + N + " = " + resultado);
    }
}

// Chamada da função para calcular a tabuada
calcularTabuada();