// Array de exemplo com nomes
const nomes = [
    "João",
    "Maria",
    "Pedro",
    "Ana",
    "Carlos"
  ];
  
  // Função para preencher a tabela com os nomes
  function preencherTabela() {
    const tabela = document.getElementById("tabelaNomes");
    const tbody = tabela.querySelector("tbody");
  
    for (let i = 0; i < nomes.length; i++) {
      const nome = nomes[i];
      const linha = `<tr><td>${i + 1}</td><td>${nome}</td></tr>`;
      tbody.insertAdjacentHTML("beforeend", linha);
    }
  }
  
  // Chame a função para preencher a tabela quando a página carregar
  document.addEventListener("DOMContentLoaded", preencherTabela);
  