function copiarChave(idCampo) {
    const input = document.getElementById(idCampo);
    input.select();
    input.setSelectionRange(0, 99999); // Para mobile
  
    try {
      document.execCommand("copy");
      alert("Chave Pix copiada com sucesso!");
    } catch (err) {
      alert("Erro ao copiar a chave Pix.");
    }
  }
  
  function pagarCartao(tipo) {
    localStorage.setItem("tipo_pagamento", tipo);
    localStorage.removeItem("valor_pagamento");
  }
  