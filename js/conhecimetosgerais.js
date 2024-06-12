const questions = [
    {
        question: "Qual é o elemento químico com símbolo 'O'?",
        options: ["Ouro", "Oxigênio", "Ósmio", "Oxálido"],
        answer: 1
    },
    {
        question: "Quem escreveu 'Dom Quixote'?",
        options: ["William Shakespeare", "Miguel de Cervantes", "Gabriel García Márquez", "Jorge Luis Borges"],
        answer: 1
    },
    {
        question: "Qual planeta é conhecido como o Planeta Vermelho?",
        options: ["Terra", "Marte", "Júpiter", "Saturno"],
        answer: 1
    },
    {
        question: "Quem pintou a Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Michelangelo", "Pablo Picasso"],
        answer: 1
    },
    {
        question: "Qual é o maior oceano do mundo?",
        options: ["Oceano Atlântico", "Oceano Índico", "Oceano Pacífico", "Oceano Ártico"],
        answer: 2
    },
    {
        question: "Qual é a moeda oficial do Japão?",
        options: ["Yuan", "Won", "Yen", "Rupia"],
        answer: 2
    },
    {
        question: "Em que ano o homem pisou na Lua pela primeira vez?",
        options: ["1965", "1969", "1972", "1980"],
        answer: 1
    },
    {
        question: "Quem descobriu a penicilina?",
        options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Gregor Mendel"],
        answer: 1
    },
    {
        question: "Qual é a língua oficial do Brasil?",
        options: ["Espanhol", "Português", "Inglês", "Francês"],
        answer: 1
    },
    {
        question: "Qual país sediou os Jogos Olímpicos de 2016?",
        options: ["China", "Grécia", "Brasil", "Japão"],
        answer: 2
    },
];

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

submitButton.addEventListener('click', checkAnswer);
nextButton.addEventListener('click', nextQuestion);