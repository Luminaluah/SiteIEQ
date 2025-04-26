// Cards de Eventos
document.addEventListener("DOMContentLoaded", function () {
  let cards = document.querySelectorAll(".evento-card");
  cards.forEach((card) => {
      card.classList.add("show"); // Adiciona a classe que ativa a animação
  });
});

// Função para alternar a descrição dos eventos
function toggleDescricao(botao) {
  const info = botao.parentElement;
  const descBreve = info.querySelector('.desc-breve');
  const descCompleta = info.querySelector('.desc-completa');

  if (descCompleta.style.display === 'block') {
      descCompleta.style.display = 'none';
      descBreve.style.display = 'block';
      botao.textContent = 'Saiba Mais';
  } else {
      descCompleta.style.display = 'block';
      descBreve.style.display = 'none';
      botao.textContent = 'Mostrar Menos';
  }
}

