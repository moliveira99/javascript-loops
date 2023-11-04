// Questão 2

let alturaCM = [165, 175, 182, 162, 161];
let resultado = encontrar(alturaCM);

function encontrar(lista) {
    let menor = lista[0], maior = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] < menor) {
            menor = lista[i];
        }
        if (lista[i] > maior) {
            maior = lista[i];
        }
    }
    return {
        menor: menor,
        maior: maior
    };
}

console.log("Menor altura: ", resultado.menor);
console.log("Maior altura: ", resultado.maior);