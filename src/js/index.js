const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach
((botao, indice) => {
  botao.addEventListener('click', () => {
    desativatBotaoSelecionado();

    selecionarBotaoCarrosel(botao);

    esconderImagemAtiva();

    mostrarImagemDeFundo(indice);
  })
})

function mostrarImagemDeFundo(indice) {
  imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrosel(botao) {
  botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
  const imagemATIVA = document.querySelector('.ativa');
  imagemATIVA.classList.remove('ativa');
}

function desativatBotaoSelecionado() {
  const botaoSelecionado = document.querySelector('.selecionado');
  botaoSelecionado.classList.remove('selecionado');
}
