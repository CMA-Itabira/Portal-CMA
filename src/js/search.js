function initSearch() {
  // Função para remover acentos de uma string
  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  // Função principal que lida com o evento de busca
  const handleSearch = (event) => {
    const searchTerm = removeAccents(event.target.value.toLowerCase());

    // Sincroniza o valor entre os dois campos de busca
    document.getElementById("searchInput").value = event.target.value;
    document.getElementById("searchInputMobile").value = event.target.value;

    // Itera sobre todas as colunas de sistemas
    document.querySelectorAll(".sistemas-coluna").forEach((coluna) => {
      // Itera sobre cada link (card) dentro da coluna
      coluna.querySelectorAll("a").forEach((card) => {
        const cardText = removeAccents(card.textContent.toLowerCase());
        // Mostra ou oculta o card com base na correspondência
        card.style.display = cardText.includes(searchTerm) ? "flex" : "none";
      });
    });
  };

  // Adiciona o listener de evento 'input' para ambos os campos de busca
  document.querySelectorAll(".searchInputControl").forEach((input) => {
    input.addEventListener("input", handleSearch);
  });
}
