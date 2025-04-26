const form = document.getElementById('form-inscricao');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    mensagem.style.display = 'block';

    setTimeout(() => {
        window.location.href = 'evento-destaque.html';
    }, 2000);
});
