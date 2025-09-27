// Função para inserir números ou operadores no visor
function inserir(valor) {
    // Pega o elemento com id 'visor' e adiciona o valor passado ao final do que já está lá
    document.getElementById('visor').value += valor;
}

// Função para limpar todo o visor
function limpar() {
    // Define o valor do visor como vazio
    document.getElementById('visor').value = '';
}

// Função para apagar o último caractere do visor
function apagar() {
    // Pega o elemento visor
    var visor = document.getElementById('visor');
    // Substitui o valor do visor pelo mesmo valor, menos o último caractere
    visor.value = visor.value.slice(0, -1);
}

// Função para calcular o resultado da expressão no visor
function calcular() {
    var visor = document.getElementById('visor');
    try {
        // Avalia a expressão digitada usando eval e atualiza o visor
        visor.value = eval(visor.value);
    } catch(error) {
        // Se houver algum erro (ex: divisão por zero ou expressão inválida), mostra 'Error'
        visor.value = 'Error';
    }
}
