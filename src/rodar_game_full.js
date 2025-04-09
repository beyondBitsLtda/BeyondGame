// Declarando a variável global no escopo mais alto
let valorGlobalP1 = "";
let valorGlobalP2 = "";
let valorGlobalP3 = "";
let valorGlobalP4 = "";
let valorGlobalP5 = "";
let valorGlobalP6 = "";
let valorGlobalP7 = "";
let valorGlobalP8 = "";
let valorGlobalP9 = "";
let valorGlobalP10 = "";
let valorGlobalP11 = "";
let valorGlobalP12 = "";
let valorGlobalP13 = "";
let valorGlobalP14 = "";
let valorGlobalP15 = "";
let valorGlobalP16 = "";
let valorGlobalP17 = "";
let valorGlobalP18 = "";
let valorGlobalP19 = "";
let valorGlobalP20 = "";
let opcaoGlobal01 = "";
let opcaoGlobal02 = "";
let opcaoGlobal03 = "";
let opcaoGlobal04 = "";
let opcaoGlobal05 = "";
let opcaoGlobal06 = "";
let opcaoGlobal07 = "";
let opcaoGlobal08 = "";
let opcaoGlobal09 = "";
let opcaoGlobal10 = "";
let opcaoGlobal11 = "";
let opcaoGlobal12 = "";
let opcaoGlobal13 = "";
let opcaoGlobal14 = "";
let opcaoGlobal15 = "";
let opcaoGlobal16 = "";
let opcaoGlobal17 = "";
let opcaoGlobal18 = "";
let opcaoGlobal19 = "";
let opcaoGlobal20 = "";


function carregarOpcoesGlobais() {
  opcaoGlobal01 = localStorage.getItem("vof01") || "Opção padrão 01";
  console.log("opcao01 carregada:", opcaoGlobal01);


  opcaoGlobal02 = localStorage.getItem("vof02") || "Opção padrão 02";
  console.log("opcao02 carregada:", opcaoGlobal02);

  opcaoGlobal03 = localStorage.getItem("vof03") || "Opção padrão 03";
  console.log("opcao03 carregada:", opcaoGlobal03);

  opcaoGlobal04 = localStorage.getItem("vof04") || "Opção padrão 04";
  console.log("opcao04 carregada:", opcaoGlobal04);

  opcaoGlobal05 = localStorage.getItem("vof05") || "Opção padrão 05";
  console.log("opcao05 carregada:", opcaoGlobal05);

  opcaoGlobal06 = localStorage.getItem("vof06") || "Opção padrão 06";
  console.log("opcao06 carregada:", opcaoGlobal06);

  opcaoGlobal07 = localStorage.getItem("vof07") || "Opção padrão 07";
  console.log("opcao07 carregada:", opcaoGlobal07);

  opcaoGlobal08 = localStorage.getItem("vof08") || "Opção padrão 08";
  console.log("opcao08 carregada:", opcaoGlobal08);

  opcaoGlobal09 = localStorage.getItem("vof09") || "Opção padrão 09";
  console.log("opcao09 carregada:", opcaoGlobal09);

  opcaoGlobal10 = localStorage.getItem("vof10") || "Opção padrão 10";
  console.log("opcao10 carregada:", opcaoGlobal10);

  opcaoGlobal11 = localStorage.getItem("vof11") || "Opção padrão 11";
  console.log("opcao11 carregada:", opcaoGlobal11);

  opcaoGlobal12 = localStorage.getItem("vof12") || "Opção padrão 12";
  console.log("opcao12 carregada:", opcaoGlobal12);

  opcaoGlobal13 = localStorage.getItem("vof13") || "Opção padrão 13";
  console.log("opcao13 carregada:", opcaoGlobal13);

  opcaoGlobal14 = localStorage.getItem("vof14") || "Opção padrão 14";
  console.log("opcao14 carregada:", opcaoGlobal14);

  opcaoGlobal15 = localStorage.getItem("vof15") || "Opção padrão 15";
  console.log("opcao15 carregada:", opcaoGlobal15);

  opcaoGlobal16 = localStorage.getItem("vof16") || "Opção padrão 16";
  console.log("opcao16 carregada:", opcaoGlobal16);

  opcaoGlobal17 = localStorage.getItem("vof17") || "Opção padrão 17";
  console.log("opcao17 carregada:", opcaoGlobal17);

  opcaoGlobal18 = localStorage.getItem("vof18") || "Opção padrão 18";
  console.log("opcao18 carregada:", opcaoGlobal18);

  opcaoGlobal19 = localStorage.getItem("vof19") || "Opção padrão 19";
  console.log("opcao19 carregada:", opcaoGlobal19);

  opcaoGlobal20 = localStorage.getItem("vof20") || "Opção padrão 20";
  console.log("opcao20 carregada:", opcaoGlobal20);

}

// Chamar imediatamente para carregar os valores
carregarOpcoesGlobais();
// Função para carregar o valor de p1 do localStorage

function carregarValorP1() {
    valorGlobalP1 = localStorage.getItem("p1") || "Pergunta padrão se p1 não existir";
    console.log("Valor p1 carregado:", valorGlobalP1);
}
// Chamar imediatamente para carregar o valor
carregarValorP1();

// Funções para carregar os valores
function carregarValorP1() {
  valorGlobalP1 = localStorage.getItem("p1") || "Pergunta padrão se p1 não existir";
  console.log("Valor p1 carregado:", valorGlobalP1);
}
carregarValorP1();

function carregarValorP2() {
  valorGlobalP2 = localStorage.getItem("p2") || "Pergunta padrão se p2 não existir";
  console.log("Valor p2 carregado:", valorGlobalP2);
}
carregarValorP2();

function carregarValorP3() {
  valorGlobalP3 = localStorage.getItem("p3") || "Pergunta padrão se p3 não existir";
  console.log("Valor p3 carregado:", valorGlobalP3);
}
carregarValorP3();

function carregarValorP4() {
  valorGlobalP4 = localStorage.getItem("p4") || "Pergunta padrão se p4 não existir";
  console.log("Valor p4 carregado:", valorGlobalP4);
}
carregarValorP4();

function carregarValorP5() {
  valorGlobalP5 = localStorage.getItem("p5") || "Pergunta padrão se p5 não existir";
  console.log("Valor p5 carregado:", valorGlobalP5);
}
carregarValorP5();

function carregarValorP6() {
  valorGlobalP6 = localStorage.getItem("p6") || "Pergunta padrão se p6 não existir";
  console.log("Valor p6 carregado:", valorGlobalP6);
}
carregarValorP6();

function carregarValorP7() {
  valorGlobalP7 = localStorage.getItem("p7") || "Pergunta padrão se p7 não existir";
  console.log("Valor p7 carregado:", valorGlobalP7);
}
carregarValorP7();

function carregarValorP8() {
  valorGlobalP8 = localStorage.getItem("p8") || "Pergunta padrão se p8 não existir";
  console.log("Valor p8 carregado:", valorGlobalP8);
}
carregarValorP8();

function carregarValorP9() {
  valorGlobalP9 = localStorage.getItem("p9") || "Pergunta padrão se p9 não existir";
  console.log("Valor p9 carregado:", valorGlobalP9);
}
carregarValorP9();

function carregarValorP10() {
  valorGlobalP10 = localStorage.getItem("p10") || "Pergunta padrão se p10 não existir";
  console.log("Valor p10 carregado:", valorGlobalP10);
}
carregarValorP10();

function carregarValorP11() {
  valorGlobalP11 = localStorage.getItem("p11") || "Pergunta padrão se p11 não existir";
  console.log("Valor p11 carregado:", valorGlobalP11);
}
carregarValorP11();

function carregarValorP12() {
  valorGlobalP12 = localStorage.getItem("p12") || "Pergunta padrão se p12 não existir";
  console.log("Valor p12 carregado:", valorGlobalP12);
}
carregarValorP12();

function carregarValorP13() {
  valorGlobalP13 = localStorage.getItem("p13") || "Pergunta padrão se p13 não existir";
  console.log("Valor p13 carregado:", valorGlobalP13);
}
carregarValorP13();

function carregarValorP14() {
  valorGlobalP14 = localStorage.getItem("p14") || "Pergunta padrão se p14 não existir";
  console.log("Valor p14 carregado:", valorGlobalP14);
}
carregarValorP14();

function carregarValorP15() {
  valorGlobalP15 = localStorage.getItem("p15") || "Pergunta padrão se p15 não existir";
  console.log("Valor p15 carregado:", valorGlobalP15);
}
carregarValorP15();

function carregarValorP16() {
  valorGlobalP16 = localStorage.getItem("p16") || "Pergunta padrão se p16 não existir";
  console.log("Valor p16 carregado:", valorGlobalP16);
}
carregarValorP16();

function carregarValorP17() {
  valorGlobalP17 = localStorage.getItem("p17") || "Pergunta padrão se p17 não existir";
  console.log("Valor p17 carregado:", valorGlobalP17);
}
carregarValorP17();

function carregarValorP18() {
  valorGlobalP18 = localStorage.getItem("p18") || "Pergunta padrão se p18 não existir";
  console.log("Valor p18 carregado:", valorGlobalP18);
}
carregarValorP18();

function carregarValorP19() {
  valorGlobalP19 = localStorage.getItem("p19") || "Pergunta padrão se p19 não existir";
  console.log("Valor p19 carregado:", valorGlobalP19);
}
carregarValorP19();

function carregarValorP20() {
  valorGlobalP20 = localStorage.getItem("p20") || "Pergunta padrão se p20 não existir";
  console.log("Valor p20 carregado:", valorGlobalP20);
}
carregarValorP20();



// Seleção de elementos da página
const $botaoComecarGame = document.querySelector(".btn_Iniciargame");
const $questionsContainer = document.querySelector(".questions-container");
const $nextQuestion = document.querySelector(".next-question");
const $questionText = document.querySelector(".questions");
const $answersContainer = document.querySelector(".answers-container");

const $conteudoGlobal = document.querySelector(".conteudo_form");
const $containerForm = document.querySelector(".form");
const $registeredPlayers = document.querySelector('.gameArea');

const $botaoCadastrarPlayer = document.querySelector(".btn_cadastrar");
//const $botaoConcluir = document.querySelector(".btn_concluir");
const $containerGame = document.querySelector(".container_perguntas");

let $players = [];
let $currentTurn = 0;

let $order = [];
let $questionCount = 0;

let $scores = {};
let $points = 100;

document.querySelector('.playerName').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      event.preventDefault(); // Previne o comportamento padrão do "Enter"
      addPlayer();
  }
});

//Adiciona os Jogadores no array
function addPlayer() {
  const $playerName = document.querySelector('.playerName').value.trim();
  
  if ($playerName && $players.length < 4) {
      $players.push($playerName);
      $scores[$playerName] = 0;
      document.querySelector('.playerName').value = ''; // Limpa o campo de entrada
      updatePlayerList();
  } else if ($players.length >= 4) {
      alert('Você já cadastrou 4 jogadores!');
  } else {
      alert('Digite um nome válido para o jogador.');
  };
};

//Atualiza a lista de Jogadores, insere eles com o index
function updatePlayerList() {
  const $playerList = document.querySelector('.playerList');
  $playerList.innerHTML = ''; // Limpa a lista atual

  $players.forEach(($player, index) => {
      const li = document.createElement('li');
      li.textContent = `${index + 1}. ${$player}`;
      $playerList.appendChild(li);
  });

  if ($players.length == 4) {
    $botaoCadastrarPlayer.classList.add("hide");
    $order = [...$players];
    modifyContainers(); 
    shufflePlayers();
    displayCurrentPlayer();
    updateScoreBoard();
  };
};

//Embaralha a ordem dos jogadores
function shufflePlayers() {
  for (let i = $order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [$order[i], $order[j]] = [$order[j], $order[i]];
  };
};

//Atualiza o ordem de jogadores no turno
function updateTurnOrder() {
  const $turnOrder = document.getElementById('turnOrder');
  $turnOrder.innerHTML = '';

  $order.forEach($player => {
      const li = document.createElement('li');
      li.textContent = $player;
      $turnOrder.appendChild(li);
  });

  displayCurrentPlayer();
};

//Atualiza e adiciona o jogador no placar
function updateScoreBoard() {
  const $scoreBoardContainer = document.getElementById('scoreBoardContainer');
  $scoreBoardContainer.innerHTML = '<h2>Pontuação</h2>'; // Limpa a área e coloca o título

  $players.forEach($player => {
      const $scoreBox = document.createElement('div');
      $scoreBox.classList.add('scoreBox');
      $scoreBox.innerHTML = `${$player} - ${$scores[$player]} pts;`
      $scoreBoardContainer.appendChild($scoreBox);
  });
};
console.log('teste1')
//Exibe o Jogador atual
function displayCurrentPlayer() {
  const $currentPlayer = document.getElementById('currentPlayer');
  $currentPlayer.textContent = `Vez de: ${$order[$currentTurn]}`;
};

 //Distribui pontos para o jogador atual
function nextTurn() {
  $points = 100;

  $questionCount++;
  $currentTurn++;

  if ($currentTurn >= $order.length) {
      $currentTurn = 0;
      shufflePlayers();
  }

  displayCurrentPlayer();
  updateScoreBoard();
};
  
//Modifica a exibição dos Container's
function modifyContainers(){
  $containerGame.classList.remove("hide");
  $conteudoGlobal.classList.add("hide");
};

// Adicionando event listeners
$botaoComecarGame.addEventListener("click", startGame);
$nextQuestion.addEventListener("click", displayNextQuestions);
$nextQuestion.addEventListener("click", nextTurn);
$botaoCadastrarPlayer.addEventListener("click", addPlayer);

// Variáveis de estado
let currentQuestionIndex = 0;
let totalCorrect = 0;

// Função para iniciar o jogo
function startGame() {
    // Recarregar o valor de p1 antes de começar o jogo
    carregarValorP1();
    
    $botaoComecarGame.classList.add("hide")
    $questionsContainer.classList.remove("hide")
    $registeredPlayers.classList.remove("hide");
    
    // Atualizamos as perguntas com o valor atual de p1
    atualizarPrimeiraQuestao();
    
    displayNextQuestions();
    updateTurnOrder();
    updateScoreBoard();
};
console.log("teste2")

// Função para atualizar a primeira questão com o valor de p1
function atualizarPrimeiraQuestao() {
    // Verificar se já temos o valor de p1, se não, tente carregar novamente
    if (!valorGlobalP1) {
        carregarValorP1();
    }
    
    // Atualiza a primeira questão com o valor de p1
    if (questions.length > 0) {
        questions[0].question = valorGlobalP1;
        console.log("Primeira questão atualizada com:", valorGlobalP1);
    }
}

// Função para exibir a próxima pergunta
function displayNextQuestions() {
    resetState();

    if (currentQuestionIndex >= questions.length) {
        return finishGame();
    }

    document.body.removeAttribute("class");
    const currentQuestion = questions[currentQuestionIndex];
    $questionText.textContent = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const newAnswer = document.createElement("button");
        newAnswer.classList.add("button", "answer");
        newAnswer.textContent = answer.text;

        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct;
        }

        $answersContainer.appendChild(newAnswer);
        newAnswer.addEventListener("click", selectAnswer);
    });

};

// Função para resetar o estado da interface
function resetState() {
    while ($answersContainer.firstChild) {
        $answersContainer.removeChild($answersContainer.firstChild);
    }
  document.body.removeAttribute("class")
  $nextQuestion.classList.add("hide")
};
console.log("aqui 3")
// Função para selecionar uma resposta
function selectAnswer(event) {
    const selectedAnswer = event.target;
    const correct = selectedAnswer.dataset.correct === "true";

    if (correct) {
      if ((currentQuestionIndex + 1) % 5 === 0) {

          alert(`Você ganhou ${$points} pontos especiais!`);
      }
      document.body.classList.add("correct");
        totalCorrect += $points;
        alert(`Você ganhou ${$points} pontos!`);
        const currentPlayer = $order[$currentTurn];
        $scores[currentPlayer] += $points;  
    } else {
        document.body.classList.add("incorrect");
    }

    Array.from($answersContainer.children).forEach(button => {
        const correct = button.dataset.correct === "true";
        button.classList.add(correct ? "correct" : "incorrect");
        button.disabled = true;
    });

    $nextQuestion.classList.remove("hide");
    currentQuestionIndex++;
};
// Função para finalizar o jogo
function finishGame() {
    const totalQuestions = questions.length * 100;
    const performance = totalCorrect;

    let winners = null;
    let maxScore = 0;

    for (const [player, score] of Object.entries($scores)) {
      if (score > maxScore) {
        maxScore = score;
        winners = [player]; // novo vencedor, zera a lista
      } else if (score === maxScore) {
        winners.push(player); // empate
      }
    }
    
    const game = [
      {
        players: $players.map(player => ({
          name: player,
          points: $scores[player]
        })),
        winners: winners, // array de vencedores
        maxScore: maxScore,
        totalQuestions: currentQuestionIndex,
        empate: winners.length > 1 // booleano: true se houve empate
      }
    ];
    
    // Exibir pontuação dos jogadores
    game[0].players.forEach(player => {
      console.log(`Nome: ${player.name} | Pontos: ${player.points}`);
    });
    
    // Exibir resultado final
    if (game[0].empate) {
      console.log(`Houve um empate! Os vencedores com ${game[0].maxScore} pontos foram:`);
      game[0].winners.forEach(name => console.log(`- ${name}`));
    } else {
      console.log(`Vencedor: ${game[0].winners[0]} com o total de ${game[0].maxScore} pontos!`);
    }

    let message;
    if (performance >= 900) {
        message = "Excelente! Você é quase um gerente de TI!)";
    } else if (performance >= 700) {
        message = "Muito bom :)";
    } else if (performance >= 500) {
        message = "Bom";
    } else {
        message = "Pode melhorar :(";
    }

    alert(`Jogo terminado! ${message}`);

    $questionsContainer.innerHTML = 
    `
        <h3>Parabéns: ${winners} com ${maxScore} pontos! </h3>
        <span>Obrigado por terem participado! </span>

        <button onclick=window.location.reload() class="button"> Jogar novamente </button>
    `;
};

// Banco de perguntas e respostas
const questions = [
  {
    question: valorGlobalP1,
    answers: [
      { text: "Verdadeiro", correct: opcaoGlobal01.trim().toLowerCase() === "verdadeiro" },
      { text: "Falso", correct: opcaoGlobal01.trim().toLowerCase() === "falso" }
    ]
  },
  {
    question: valorGlobalP2,
    answers: [
      { text: "Verdadeiro", correct: opcaoGlobal02.trim().toLowerCase() === "verdadeiro" },
      { text: "Falso", correct: opcaoGlobal02.trim().toLowerCase() === "falso" }
    ]
  },
  {
    question: valorGlobalP3,
    answers: [
      { text: "Verdadeiro", correct: opcaoGlobal03.trim().toLowerCase() === "verdadeiro" },
      { text: "Falso", correct: opcaoGlobal03.trim().toLowerCase() === "falso" }
    ]
  },
  {
    question: valorGlobalP4,
    answers: [
      { text: "Verdadeiro", correct: opcaoGlobal04.trim().toLowerCase() === "verdadeiro" },
      { text: "Falso", correct: opcaoGlobal04.trim().toLowerCase() === "falso" }
    ]
  },
  {
    question: valorGlobalP5,
    answers: [
      { text: "Verdadeiro", correct: opcaoGlobal05.trim().toLowerCase() === "verdadeiro" },
      { text: "Falso", correct: opcaoGlobal05.trim().toLowerCase() === "falso" }
    ]
  },
  {
    question: valorGlobalP6,
    answers: [
      { text: "Verdadeiro", correct: opcaoGlobal06.trim().toLowerCase() === "verdadeiro" },
      { text: "Falso", correct: opcaoGlobal06.trim().toLowerCase() === "falso" }
    ]
  },
  {
    question: valorGlobalP7,
    answers: [
      { text: "Verdadeiro", correct: opcaoGlobal07.trim().toLowerCase() === "verdadeiro" },
      { text: "Falso", correct: opcaoGlobal07.trim().toLowerCase() === "falso" }
    ]
  },
  {
    question: valorGlobalP8,
    answers: [
      { text: "Verdadeiro", correct: opcaoGlobal08.trim().toLowerCase() === "verdadeiro" },
      { text: "Falso", correct: opcaoGlobal08.trim().toLowerCase() === "falso" }
    ]
  },
  {
    question: valorGlobalP9,
    answers: [
      { text: "Verdadeiro", correct: opcaoGlobal09.trim().toLowerCase() === "verdadeiro" },
      { text: "Falso", correct: opcaoGlobal09.trim().toLowerCase() === "falso" }
    ]
  },
  {
    question: valorGlobalP10,
    answers: [
      { text: "Verdadeiro", correct: opcaoGlobal10.trim().toLowerCase() === "verdadeiro" },
      { text: "Falso", correct: opcaoGlobal10.trim().toLowerCase() === "falso" }
    ]
  },
  {
    question: valorGlobalP11,
    answers: [
      { text: "Verdadeiro", correct: opcaoGlobal11.trim().toLowerCase() === "verdadeiro" },
      { text: "Falso", correct: opcaoGlobal11.trim().toLowerCase() === "falso" }
    ]
  },
  {
    question: valorGlobalP12,
    answers: [
      { text: "Verdadeiro", correct: opcaoGlobal12.trim().toLowerCase() === "verdadeiro" },
      { text: "Falso", correct: opcaoGlobal12.trim().toLowerCase() === "falso" }
    ]
  },
  {
    question: valorGlobalP13,
    answers: [
      { text: "Verdadeiro", correct: opcaoGlobal13.trim().toLowerCase() === "verdadeiro" },
      { text: "Falso", correct: opcaoGlobal13.trim().toLowerCase() === "falso" }
    ]
  },
  {
    question: valorGlobalP14,
    answers: [
      { text: "Verdadeiro", correct: opcaoGlobal14.trim().toLowerCase() === "verdadeiro" },
      { text: "Falso", correct: opcaoGlobal14.trim().toLowerCase() === "falso" }
    ]
  },
  {
    question: valorGlobalP15,
    answers: [
      { text: "Verdadeiro", correct: opcaoGlobal15.trim().toLowerCase() === "verdadeiro" },
      { text: "Falso", correct: opcaoGlobal15.trim().toLowerCase() === "falso" }
    ]
  },
  {
    question: valorGlobalP16,
    answers: [
      { text: "Verdadeiro", correct: opcaoGlobal16.trim().toLowerCase() === "verdadeiro" },
      { text: "Falso", correct: opcaoGlobal16.trim().toLowerCase() === "falso" }
    ]
  },
  {
    question: valorGlobalP17,
    answers: [
      { text: "Verdadeiro", correct: opcaoGlobal17.trim().toLowerCase() === "verdadeiro" },
      { text: "Falso", correct: opcaoGlobal17.trim().toLowerCase() === "falso" }
    ]
  },
  {
    question: valorGlobalP18,
    answers: [
      { text: "Verdadeiro", correct: opcaoGlobal18.trim().toLowerCase() === "verdadeiro" },
      { text: "Falso", correct: opcaoGlobal18.trim().toLowerCase() === "falso" }
    ]
  },
  {
    question: valorGlobalP19,
    answers: [
      { text: "Verdadeiro", correct: opcaoGlobal19.trim().toLowerCase() === "verdadeiro" },
      { text: "Falso", correct: opcaoGlobal19.trim().toLowerCase() === "falso" }
    ]
  },
  {
    question: valorGlobalP20,
    answers: [
      { text: "Verdadeiro", correct: opcaoGlobal20.trim().toLowerCase() === "verdadeiro" },
      { text: "Falso", correct: opcaoGlobal20.trim().toLowerCase() === "falso" }
    ]
  }
];

