// Declarando variáveis globais
let valorGlobalP1, valorGlobalP2, valorGlobalP3, valorGlobalP4, valorGlobalP5,
    valorGlobalP6, valorGlobalP7, valorGlobalP8, valorGlobalP9, valorGlobalP10,
    valorGlobalP11, valorGlobalP12, valorGlobalP13, valorGlobalP14, valorGlobalP15,
    valorGlobalP16, valorGlobalP17, valorGlobalP18, valorGlobalP19, valorGlobalP20;

let valorGlobalVOF1, valorGlobalVOF2, valorGlobalVOF3, valorGlobalVOF4, valorGlobalVOF5,
    valorGlobalVOF6, valorGlobalVOF7, valorGlobalVOF8, valorGlobalVOF9, valorGlobalVOF10,
    valorGlobalVOF11, valorGlobalVOF12, valorGlobalVOF13, valorGlobalVOF14, valorGlobalVOF15,
    valorGlobalVOF16, valorGlobalVOF17, valorGlobalVOF18, valorGlobalVOF19, valorGlobalVOF20;

// Funções globais para obter os valores salvos de p1 a p20 e vof01 a vof20
for (let i = 1; i <= 20; i++) {
    window[`obterValorP${i}`] = function () {
        return localStorage.getItem(`p${i}`) || "";
    };
    window[`obterValorVOF${i}`] = function () {
        return localStorage.getItem(`vof${String(i).padStart(2, '0')}`) || "";
    };
}

// Função para carregar os valores
function carregarValorNoHTML() {
    const valorSalvo = localStorage.getItem("global");
    if (valorSalvo && valorSalvo.trim() !== "") {
        const tituloElemento = document.getElementById("titulo_pagina");
        if (tituloElemento) tituloElemento.innerHTML = valorSalvo;

        const h1Elemento = document.getElementById("nome_game_h1");
        if (h1Elemento) h1Elemento.innerHTML = valorSalvo;

        const elementosClasse = document.getElementsByClassName("nome-game-display");
        for (let i = 0; i < elementosClasse.length; i++) {
            if (elementosClasse[i].tagName === "INPUT" || elementosClasse[i].tagName === "TEXTAREA") {
                elementosClasse[i].value = valorSalvo;
            } else {
                elementosClasse[i].innerHTML = valorSalvo;
            }
        }
    }

    // Processa os valores de p1 a p20 e vof01 a vof20
    for (let i = 1; i <= 20; i++) {
        const pergunta = localStorage.getItem(`p${i}`);
        const vof = localStorage.getItem(`vof${String(i).padStart(2, '0')}`);

        window[`valorGlobalP${i}`] = pergunta;
        window[`valorGlobalVOF${i}`] = vof;

        // Exibe perguntas (p1, p2...)
        const perguntaEl = document.getElementById(`p${i}_display`);
        if (pergunta && perguntaEl) {
            if (perguntaEl.tagName === "INPUT" || perguntaEl.tagName === "TEXTAREA") {
                perguntaEl.value = pergunta;
            } else {
                perguntaEl.innerHTML = pergunta;
            }

            const eventoPergunta = new CustomEvent(`p${i}Carregado`, {
                detail: { [`valorP${i}`]: pergunta }
            });
            document.dispatchEvent(eventoPergunta);
        }

        // Exibe vof (vof01, vof02...)
        const vofEl = document.getElementById(`vof${String(i).padStart(2, '0')}`);
        if (vof && vofEl) {
            vofEl.value = vof;

            const eventoVOF = new CustomEvent(`vof${i}Carregado`, {
                detail: { [`valorVOF${i}`]: vof }
            });
            document.dispatchEvent(eventoVOF);
        }
    }
}

// Função para salvar os valores
function cadastrar() {
    alert("Iniciando cadastro");

    const inputElement = document.getElementById("input_nome_game");
    if (!inputElement) {
        alert("Elemento com ID 'input_nome_game' não encontrado!");
        return;
    }

    let nome_game = inputElement.value;
    localStorage.setItem("global", nome_game);

    for (let i = 1; i <= 20; i++) {
        const perguntaEl = document.getElementById(`p${i}`);
        const vofEl = document.getElementById(`vof${String(i).padStart(2, '0')}`);

        if (!perguntaEl || !vofEl) {
            alert(`Elemento com ID 'p${i}' ou 'vof${String(i).padStart(2, '0')}' não encontrado!`);
            return;
        }

        const pergunta = perguntaEl.value;
        const vof = vofEl.value;

        if (!pergunta || !vof) {
            alert(`Preencha a pergunta ${i} e escolha Verdadeiro ou Falso.`);
            return;
        }

        localStorage.setItem(`p${i}`, pergunta);
        localStorage.setItem(`vof${String(i).padStart(2, '0')}`, vof);

        window[`valorGlobalP${i}`] = pergunta;
        window[`valorGlobalVOF${i}`] = vof;
    }

    alert("Valores salvos com sucesso!");

    // Habilita o botão se quiser (caso esteja desabilitado no início)
    const botaoCadastrar = document.getElementById("btn-sortear");
    if (botaoCadastrar) {
        botaoCadastrar.disabled = false;
    }

    carregarValorNoHTML();
}

// Função auxiliar para verificar se um valor está vazio
function estaVazio(chave) {
    const valor = localStorage.getItem(chave);
    return !valor || valor.trim() === "";
}

window.addEventListener("DOMContentLoaded", carregarValorNoHTML);

  