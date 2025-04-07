// Função para carregar o valor do localStorage no HTML

    // Recupera o valor do localStorage
    const valorSalvo = localStorage.getItem("global");
    
    console.log("Valor recuperado do localStorage:", valorSalvo);
    
    // Verifica se o valor existe
    if (valorSalvo && valorSalvo.trim() !== "") {
        // Atualiza o título da página
        const tituloElemento = document.getElementById("titulo_pagina");
        if (tituloElemento) {
            tituloElemento.innerHTML = valorSalvo;
        }
        
        // Atualiza o cabeçalho H1
        const h1Elemento = document.getElementById("nome_game_h1");
        if (h1Elemento) {
            h1Elemento.innerHTML = valorSalvo;
        }
        
        // Atualiza todos os elementos com a classe nome-game-display
        const elementosClasse = document.getElementsByClassName("nome-game-display");
        for (let i = 0; i < elementosClasse.length; i++) {
            if (elementosClasse[i].tagName === "INPUT" || elementosClasse[i].tagName === "TEXTAREA") {
                elementosClasse[i].value = valorSalvo;
            } else {
                elementosClasse[i].innerHTML = valorSalvo;
            }
        }
    }

// Executa quando a página terminar de carregar
window.addEventListener("DOMContentLoaded", carregarValorNoHTML);