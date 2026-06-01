// Seleciona os elementos do HTML através do ID
const botaoAcao = document.getElementById('btn-acao');
const visorContador = document.getElementById('contador');

// Inicializa a variável do contador
let cliques = 0;

// Adiciona um evento de clique ao botão
botaoAcao.addEventListener('click', () => {
    // Incrementa o número de cliques
    cliques++;
    
    // Atualiza o texto exibido na tela
    visorContador.textContent = cliques;
    
    // Adiciona uma pequena animação de console para verificar o funcionamento
    console.log(`Botão clicado! Total de cliques: ${cliques}`);
});
