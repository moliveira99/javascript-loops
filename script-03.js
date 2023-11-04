// Questão 3

function calcularEstatisticas(lista) {
    let soma = 0;
    let positivos = 0;
    let negativos = 0;

    for (let i = 0; i < lista.length; i++) {
        soma += lista[i];
        if (lista[i] > 0) {
            positivos++;
        } else if (lista[i] < 0) {
            negativos++;
        }
    }

    let media = soma / lista.length;
    let percentualPositivos = (positivos / lista.length) * 100;
    let percentualNegativos = (negativos / lista.length) * 100;

    return {
        media: media,
        positivos: positivos,
        negativos: negativos,
        percentualPositivos: percentualPositivos,
        percentualNegativos: percentualNegativos
    };
}

// Exemplo de uso da função
let valores = [1, -2, 3, -4, 5, -6, 7, -8];
let estatisticas = calcularEstatisticas(valores);
console.log("Média aritmética: ", estatisticas.media);
console.log("Quantidade de valores positivos: ", estatisticas.positivos);
console.log("Quantidade de valores negativos: ", estatisticas.negativos);
console.log("Percentual de valores positivos: ", estatisticas.percentualPositivos + "%");
console.log("Percentual de valores negativos: ", estatisticas.percentualNegativos + "%");