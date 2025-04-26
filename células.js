// Função para abrir o modal e exibir o texto abaixo do botão
function openModal(title, leader, timoteo, address) {
    // Atualiza o conteúdo do modal
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-leader").textContent = leader;
    document.getElementById("modal-timoteo").textContent = timoteo;
    document.getElementById("modal-address").textContent = address;
    document.getElementById("modal").style.display = "flex";

    // Exibir o texto abaixo do botão correspondente
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        let btn = card.querySelector(".btn");
        let infoText = card.querySelector(".info-text");

        if (btn.textContent.includes(title)) {
            infoText.innerHTML = `<strong>Líder:</strong> ${leader}<br>
                                  <strong>Timóteo:</strong> ${timoteo}<br>
                                  <strong>Endereço:</strong> ${address}`;
            infoText.style.display = "block";
        } else {
            infoText.style.display = "none"; // Oculta os textos de outras células
        }
    });
}

// Função para fechar o modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}
