// Variáveis globais
let planoEscolhido = '';
let precoPlano = 0;

// Função para abrir o modal de assinatura
function assinar(plano, preco) {
    planoEscolhido = plano;
    precoPlano = preco;

    const infoAssinatura = document.getElementById('info-assinatura');
    infoAssinatura.textContent = `Você escolheu o ${plano} por R$ ${preco.toFixed(2)}. Deseja confirmar a assinatura?`;

    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
}

// Função para fechar o modal
function fecharModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Função para finalizar a assinatura
function finalizarAssinatura() {
    alert(`Você assinou o ${planoEscolhido} por R$ ${precoPlano.toFixed(2)}!`);
    fecharModal();
}
