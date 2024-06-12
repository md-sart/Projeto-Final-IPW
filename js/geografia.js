const questions = [
    {
        question: "Qual é a capital do Canadá?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        answer: 2
    },
    {
        question: "Qual rio é o mais longo do mundo?",
        options: ["Rio Amazonas", "Rio Nilo", "Rio Yangtzé", "Rio Mississippi"],
        answer: 1
    },
    {
        question: "Qual país tem a maior população do mundo?",
        options: ["Índia", "Estados Unidos", "Indonésia", "China"],
        answer: 3
    },
    {
        question: "Qual é o maior deserto do mundo?",
        options: ["Deserto do Saara", "Deserto da Arábia", "Deserto de Gobi", "Antártida"],
        answer: 3
    },
    {
        question: "Em qual continente está localizada a Argentina?",
        options: ["África", "Europa", "América do Sul", "América do Norte"],
        answer: 2
    },
    {
        question: "Qual é a maior cadeia de montanhas do mundo?",
        options: ["Himalaia", "Andes", "Rocky Mountains", "Alpes"],
        answer: 0
    },
    {
        question: "Qual é o menor país do mundo em área?",
        options: ["Mônaco", "Vaticano", "San Marino", "Liechtenstein"],
        answer: 1
    },
    {
        question: "Qual é o oceano mais profundo do mundo?",
        options: ["Oceano Atlântico", "Oceano Índico", "Oceano Pacífico", "Oceano Ártico"],
        answer: 2
    },
    {
        question: "Qual é a capital do Japão?",
        options: ["Osaka", "Tóquio", "Kyoto", "Nagoya"],
        answer: 1
    },
    {
        question: "Em qual país fica a Grande Barreira de Coral?",
        options: ["Brasil", "Austrália", "México", "Indonésia"],
        answer: 1
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