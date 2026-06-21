// 1. Desenhando um sistema de impressão (Fila de Impressão)
// Instruções:
// ● Criar uma fila que simula o processo de uma fila de impressão;
// ● Adicionar tarefas de impressão (como "Imprimir Documento 1", "Imprimir Documento 2", etc.) na fila e, em seguida, desenfileirar as tarefas uma a uma, simulando a impressão;
// ● Imprimir no console o nome do documento sendo impresso a cada vez que uma tarefa for desenfileirar;
// ● Ao final, se a fila estiver vazia, imprimir uma mensagem indicando que não há mais tarefas na fila.

// Criando uma fila vazia
let filaImpressao = [];

// Adicionando documentos na fila
filaImpressao.push("Imprimir Documento 1");
filaImpressao.push("Imprimir Documento 2");
filaImpressao.push("Imprimir Documento 3");

console.log("Fila de impressão criada!\n");

// Enquanto houver documentos na fila
while (filaImpressao.length > 0) {
    let documento = filaImpressao.shift(); // Remove o primeiro da fila
    console.log("Imprimindo:", documento);
}

// Verificando se a fila está vazia
if (filaImpressao.length === 0) {
    console.log("\nNão há mais tarefas na fila.");
}