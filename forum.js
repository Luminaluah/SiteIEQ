// Captura a imagem da galeria
const images = document.querySelectorAll('.gallery-image');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const caption = document.getElementById('caption');
const close = document.querySelector('.close');

// Função para abrir a imagem no modal
images.forEach((image) => {
    image.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImage.src = this.src;
        caption.textContent = this.alt; // Exibe a descrição da imagem (pode ser alterado)
    });
});

// Fechar o modal ao clicar no "X"
close.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fechar o modal ao clicar fora da imagem
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
