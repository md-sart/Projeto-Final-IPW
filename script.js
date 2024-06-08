// Lista de perguntas, cada uma com suas opções e a resposta correta
const perguntas = [
    {
        pergunta: 'Quanto é 2+2?',
        respostas: {
            'a': '1',
            'b': '4',
            'c': '5',
        },
        resposta_certa: 'b',
    },
    {
        pergunta: 'Quanto é 3x2?',
        respostas: {
            'a': '4',
            'b': '101',
            'c': '6',
        },
        resposta_certa: 'c',
    }
];

let respostasCorretas = 0;  // Variável para contar as respostas corretas
let i = 0;  // Índice para controlar a pergunta atual

// Loop para passar por cada pergunta
while (i < perguntas.length) {
    const perguntaAtual = perguntas[i];
    console.log(perguntaAtual.pergunta);

    // Mostrar opções de resposta
    for (const opcao in perguntaAtual.respostas) {
        console.log(`${opcao}) ${perguntaAtual.respostas[opcao]}`);
    }

    // Solicitar resposta do usuário
    const respostaUsuario = prompt("Sua resposta: ").toLowerCase();

    // Verificar se a resposta está correta
    if (respostaUsuario === perguntaAtual.resposta_certa) {
        console.log("Resposta correta!\n");
        respostasCorretas++;
    } else {
        console.log("Resposta incorreta!\n");
    }

    // Passar para a próxima pergunta
    i++;
}

// Mostrar o resultado final
console.log(`Você acertou ${respostasCorretas} de ${perguntas.length} perguntas.`);
