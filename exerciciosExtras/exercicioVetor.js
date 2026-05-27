// 1. Acumulando o valor de vendas: Usar o laço for para calcular o total de vendas de uma
// loja, dado um array com os valores das transações.
// Instruções:
// ● Criar um array com valores de vendas diárias (por exemplo: [100, 200, 150, 300]);
// ● Usar o laço for para somar todos os valores;
// ● No final, exibir o valor total acumulado de vendas no console.

const vendas = [232,356,480,75]
let soma = 0

for (let i = 0; i < vendas.length; i++) {
    soma += vendas[i];
}
console.log(`Total de vendas foi ${soma}`);


// 2. Calculando a média de notas: Usar um laço for para calcular a média das notas de
// um/a estudante.
// Instruções:
// ● Criar um array com as notas de um/a estudante(por exemplo: [8, 7, 9, 10, 6]);
// ● Utilizar o laço for para somar as notas;
// ● Calcular a média das notas e exibir o resultado no console.

const notas = [6, 8, 4, 9, 10];
soma = 0
for(let i = 0; i < notas.length; i++){
    soma += notas[i]
 }
const media = soma / notas.length

console.log(`A media final ${media}`);



// 3. Procurando um valor no array: Usar um laço for para procurar um número específico em
// um array e verificar se ele existe.
// Instruções:
// ● Criar um array com vários números (ex: [10, 15, 20, 25, 30]);
// ● Definir um número que deseja procurar no array (ex: let numeroProcurado = 20);
// ● Utilizar um laço for para verificar se o número existe no array e exiba a mensagem
// "Número encontrado" ou "Número não encontrado".

const valores = [10, 15, 20, 25, 30];
let numeroProcurado = 20;
let pos = -1
for(let bus = 0; bus < valores.length; bus++){
    if(valores[bus] === numeroProcurado) {
    pos = bus;
    break;
    }
}
    if(pos == -1) {
    console.log(`O valor não foi encontrado!`);

} else {
    console.log(`O valor esta na posição ${pos}`);
}


// 4. Contagem de números pares: Usar o laço for para contar quantos números pares
// existem em um array de números.
// Instruções:
// ● Criar um array com alguns números (por exemplo: [1, 2, 3, 4, 5, 6]);
// ● Utilizar o laço for para contar quantos números pares existem nesse array;
// ● Ao final, exiba a quantidade de números pares no console.

const numeros = [1, 2, 3, 4, 5, 6]
let contadorPares = 0

for(let cont = 0; cont < numeros.length; cont++){
    if (numeros[cont] % 2 == 0) { 
        contadorPares++; 
    }
}
console.log(`A quantidade de numeros pares é: ${contadorPares}`);

