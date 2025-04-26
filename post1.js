// Lista de palavras proibidas
const bannedWords = ['palavrão1', 'palavrão2', 'simbologia1']; // Adicione as palavras e simbologias que deseja bloquear

// Recupera os comentários armazenados no localStorage
const storedComments = JSON.parse(localStorage.getItem('comments')) || [];

// Função para exibir os comentários
function displayComments() {
    const commentList = document.getElementById('comment-list');
    commentList.innerHTML = ''; // Limpa a lista de comentários

    storedComments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comentario');
        commentDiv.innerHTML = `
            <p class="comentario-user">Usuário Anônimo:</p>
            <p>${comment}</p>
        `;
        commentList.appendChild(commentDiv);
    });
}

// Função para adicionar um comentário
document.getElementById('comment-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita o comportamento padrão de envio do formulário

    const commentInput = document.getElementById('comment-input');
    let comment = commentInput.value.trim();

    // Verifica se o comentário contém palavras proibidas
    const containsBannedWords = bannedWords.some(word => comment.toLowerCase().includes(word.toLowerCase()));

    if (containsBannedWords) {
        alert('Seu comentário contém palavras ou simbologias proibidas!');
    } else if (comment) {
        // Adiciona o comentário à lista
        storedComments.push(comment);
        localStorage.setItem('comments', JSON.stringify(storedComments));
        commentInput.value = ''; // Limpa o campo de comentário
        displayComments(); // Atualiza a lista de comentários
    } else {
        alert('Por favor, escreva um comentário válido!');
    }
});

// Exibe os comentários armazenados ao carregar a página
displayComments();

