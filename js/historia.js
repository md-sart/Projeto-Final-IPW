const questions = [
    {
        question: "Em que ano ocorreu a Revolução Francesa?",
        options: ["1776", "1789", "1812", "1804"],
        answer: 1
    },
    {
        question: "Quem foi o líder da Revolução Russa em 1917?",
        options: ["Vladimir Lenin", "Josef Stalin", "Leon Trotsky", "Mikhail Gorbachev"],
        answer: 0
    },
    {
        question: "Qual é o nome do imperador romano que supostamente incendiou Roma?",
        options: ["Nero", "Augusto", "Júlio César", "Trajano"],
        answer: 0
    },
    {
        question: "Quem foi o primeiro presidente do Brasil?",
        options: ["Getúlio Vargas", "Juscelino Kubitschek", "Tiradentes", "Marechal Deodoro da Fonseca"],
        answer: 3
    },
    {
        question: "Qual foi a capital do Império Romano?",
        options: ["Atenas", "Roma", "Constantinopla", "Alexandria"],
        answer: 1
    },
    {
        question: "Quem foi o líder nazista durante a Segunda Guerra Mundial?",
        options: ["Joseph Goebbels", "Heinrich Himmler", "Hermann Göring", "Adolf Hitler"],
        answer: 3
    },
    {
        question: "Qual foi a primeira guerra mundial?",
        options: ["Guerra Civil Americana", "Guerra Fria", "Primeira Guerra Mundial", "Guerra Franco-Prussiana"],
        answer: 2
    },
    {
        question: "Quem foi o líder da Revolução Cubana em 1959?",
        options: ["Fulgencio Batista", "Fidel Castro", "Che Guevara", "Camilo Cienfuegos"],
        answer: 1
    },
    {
        question: "Qual foi o período conhecido como 'Idade das Trevas'?",
        options: ["Idade Média", "Renascimento", "Idade Antiga", "Idade Moderna"],
        answer: 0
    },
    {
        question: "Qual foi o primeiro país a abolir a escravidão?",
        options: ["Brasil", "Estados Unidos", "Haiti", "Reino Unido"],
        answer: 2
    }
];

// Restante do seu código JavaScript...


let currentQuestion = 0;
let score = 0;

const questionElement = document.querySelector('.question');
const optionsElement = document.querySelector('.options');
const submitButton = document.querySelector('.submit-btn');
const nextButton = document.querySelector('.next-btn');
const resultElement = document.querySelector('.result');

function showQuestion() {
    const currentQ = questions[currentQuestion];
    questionElement.textContent = currentQ.question;
    optionsElement.innerHTML = '';
    currentQ.options.forEach((option, index) => {
        const li = document.createElement('li');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'option';
        input.value = index;
        input.id = option${index};
        const label = document.createElement('label');
        label.htmlFor = option${index};
        label.textContent = option;
        li.appendChild(input);
        li.appendChild(label);
        optionsElement.appendChild(li);
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) return;

    const answer = parseInt(selectedOption.value);
    if (answer === questions[currentQuestion].answer) {
        score++;
    }
    submitButton.style.display = 'none';
    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
        submitButton.style.display = 'block';
        nextButton.style.display = 'none';
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = '';
    optionsElement.innerHTML = '';
    resultElement.textContent = Você acertou ${score} de ${questions.length} perguntas.;
    resultElement.style.display = 'block';
}

showQuestion();