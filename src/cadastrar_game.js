
//alert("entrei 01");
//alert("Valor no localStorage:", localStorage.getItem("global"));

function estaVazio(chave) {
  const valor = localStorage.getItem(chave);
  return !valor || valor.trim() === "";
}



if (estaVazio("global")) {
  //alert("vazio");
} else {
  //alert("cheio");
}
function cadastrar() {
  let nome_game = document.getElementById("input_nome_game").value;
  localStorage.setItem("global", nome_game);
  //alert("Valor no localStorage:", localStorage.getItem("global"));
 }
 
 // mecanismo para salvar informações no local storage, será util para continuidade do Beyond Game