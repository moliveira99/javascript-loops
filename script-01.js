// Questão 1

let soma = 0

for(i=1;i<500;i++){
    if(i%2== 1 && i%3==0)
        soma=soma+i;
}

console.log("Resultado da soma: "+soma)