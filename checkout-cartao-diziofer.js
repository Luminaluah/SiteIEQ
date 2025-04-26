document.getElementById("checkout-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const dadosPagamento = {
      nome: document.getElementById("nome").value,
      numero: document.getElementById("numero").value,
      validade: document.getElementById("validade").value,
      cvv: document.getElementById("cvv").value,
      valor: document.getElementById("valor").value,
    };
  
    // Aqui você vai conectar com sua futura API
    console.log("Simulação de envio para API:", dadosPagamento);
  
    alert("Pagamento simulado com sucesso!\n(Conecte aqui sua API futuramente)");
  });
  