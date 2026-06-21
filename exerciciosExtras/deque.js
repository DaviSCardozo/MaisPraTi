// 2. Implementação de deque
// Instruções:
// ● Implementar uma classe Deque que permita adicionar e remover elementos tanto na frente quanto no final da estrutura;
// ● A classe deve ter os métodos: addFront(element), addBack(element), removeFront(), removeBack(), peekFront(), peekBack(), isEmpty() e size();
// ● Criar um objeto da classe Deque e adicionar elementos em ambas as extremidades.

// Após isso, remover elementos de ambas as extremidades e mostrar o estado da
// estrutura após cada operação.

class Deque {
    constructor() {
        this.itens = [];
    }

    // Adiciona no início
    addFront(element) {
        this.itens.unshift(element);
    }

    // Adiciona no final
    addBack(element) {
        this.itens.push(element);
    }

    // Remove do início
    removeFront() {
        return this.itens.shift();
    }

    // Remove do final
    removeBack() {
        return this.itens.pop();
    }

    // Mostra o primeiro elemento
    peekFront() {
        return this.itens[0];
    }

    // Mostra o último elemento
    peekBack() {
        return this.itens[this.itens.length - 1];
    }

    // Verifica se está vazio
    isEmpty() {
        return this.itens.length === 0;
    }

    // Retorna o tamanho
    size() {
        return this.itens.length;
    }

    // Mostra os elementos
    mostrar() {
        console.log(this.itens);
    }
}

// Criando um objeto Deque
let deque = new Deque();

// Adicionando elementos
deque.addFront("A");
deque.addBack("B");
deque.addFront("C");
deque.addBack("D");

console.log("Estado inicial do Deque:");
deque.mostrar();

// Removendo da frente
console.log("\nRemovido da frente:", deque.removeFront());
deque.mostrar();

// Removendo do final
console.log("\nRemovido do final:", deque.removeBack());
deque.mostrar();

// Consultando elementos
console.log("\nPrimeiro elemento:", deque.peekFront());
console.log("Último elemento:", deque.peekBack());

// Tamanho da estrutura
console.log("Quantidade de elementos:", deque.size());

// Verificando se está vazio
console.log("Está vazio?", deque.isEmpty());