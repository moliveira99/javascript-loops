// Questão 9

function sequenciaPG(valorInicial, razao, quantidade) {
    let sequencia = [];
    for (let i = 0; i < quantidade; i++) {
        sequencia.push(valorInicial * Math.pow(razao, i));
    }
    return sequencia;
}

// Definindo valor inicial, razão e quantidade
let valorInicial = 2;
let razao = 3;
let quantidade = 10;

// Chamando a função e imprimindo a sequência
let resultado = sequenciaPG(valorInicial, razao, quantidade);
console.log("Sequência em P.G. com valor inicial " + valorInicial + " e razão " + razao + ":");
console.log(resultado);