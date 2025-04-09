let global;

alert("entrei 01");
// Corrigido: concatenando a string com o valor
alert("Valor no localStorage: " + localStorage.getItem("global"));

function estaVazio(chave) {
  const valor = localStorage.getItem(chave);
  return !valor || valor.trim() === "";
}

if (estaVazio("global")) {
  alert("vazio");
} else {
  alert("cheio");
}

function cadastrar() {
  alert("teste");
  // Verificar se o elemento existe antes de tentar acessar
  const inputElement = document.getElementById("input_nome_game");
  if (inputElement) {
    let nome_game = inputElement.value;
    localStorage.setItem("global", nome_game);
    // Corrigido: concatenando a string com o valor
    alert("Valor no localStorage: " + localStorage.getItem("global"));
  } else {
    alert("Elemento com ID 'input_nome_game' não encontrado!");
  }
}

// Remova esta linha que parece ser um comentário HTML
// <userStyle>Normal</userStyle>