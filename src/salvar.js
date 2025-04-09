function salvarPerguntas() {
    const perguntas = document.querySelectorAll('.Pergunta');
    const respostas = document.querySelectorAll('.TrueOrFalse');
  
    for (let i = 0; i < perguntas.length; i++) {
      const pergunta = perguntas[i].value.trim();
      const resposta = respostas[i].value;
  
      if (!pergunta || !resposta) {
        alert(`Por favor, preencha a pergunta ${i + 1} e selecione verdadeiro ou falso.`);
        return;
      }
  
      localStorage.setItem(`pergunta_${i + 1}`, pergunta);
      localStorage.setItem(`resposta_${i + 1}`, resposta);
    }
  
    alert('Perguntas salvas com sucesso!');
    
    // ✅ Ativa o botão de cadastrar
    document.getElementById('btn-sortear').disabled = false;
  }