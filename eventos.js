// Evento de clique para mostrar detalhes do evento
const days = document.querySelectorAll('.day');
const eventDetails = document.getElementById('eventDetails');
const eventData = {
    "10": { "title": "Culto das Crianças", "location": "Igreja XYZ", "time": "18:00" }
};

days.forEach(day => {
    day.addEventListener('click', function () {
        // Remover a classe de seleção de todos os dias
        days.forEach(d => d.classList.remove('selected'));

        // Adicionar a classe de seleção ao dia clicado
        day.classList.add('selected');

        const dayNumber = day.getAttribute('data-day');
        const event = eventData[dayNumber];

        if (event) {
            // Exibir detalhes do evento
            eventDetails.querySelector('h3').textContent = `Evento: ${event.title}`;
            eventDetails.querySelector('p').textContent = `Localização: ${event.location}`;
            eventDetails.querySelector('strong').textContent = `Horário: ${event.time}`;
            eventDetails.classList.add('show');
        } else {
            // Caso não haja evento, esconder o aviso
            eventDetails.classList.remove('show');
        }
    });
});


// Função para abrir o modal com a imagem ampliada
document.querySelectorAll('.evento').forEach(function(card) {
    card.addEventListener('click', function() {
        var imgSrc = card.querySelector('img').src; // Obtém o src da imagem clicada
        document.getElementById('imagemModal').src = imgSrc; // Define a imagem no modal
        document.getElementById('imagemAmpliada').style.display = 'flex'; // Exibe o modal
    });
});

// Função para fechar o modal
function fecharModal() {
    document.getElementById('imagemAmpliada').style.display = 'none'; // Esconde o modal
}
