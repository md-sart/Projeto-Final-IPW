const questions = [
    {
        question: "Qual é o maior deserto do mundo?",
        options: ["Deserto do Saara", "Deserto da Arábia", "Deserto de Gobi", "Antártida"],
        answer: 0
    },
    {
        question: "Qual é o rio mais longo do mundo?",
        options: ["Rio Amazonas", "Rio Nilo", "Rio Yangtzé", "Rio Mississippi"],
        answer: 1
    },
    {
        question: "Em qual continente está localizado o Egito?",
        options: ["Ásia", "África", "Europa", "América do Sul"],
        answer: 1
    },
    {
        question: "Qual é a capital da Austrália?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        answer: 2
    },
    {
        question: "Qual é o país com maior área territorial do mundo?",
        options: ["Rússia", "Canadá", "Estados Unidos", "China"],
        answer: 0
    },
    {
        question: "Qual é o menor país do mundo em área territorial?",
        options: ["Mônaco", "Vaticano", "San Marino", "Nauru"],
        answer: 1
    },
    {
        question: "Qual é a montanha mais alta do mundo?",
        options: ["Monte Everest", "Monte Kilimanjaro", "Monte McKinley", "Monte Aconcágua"],
        answer: 0
    },
    {
        question: "Qual é o maior arquipélago do mundo?",
        options: ["Indonésia", "Filipinas", "Havaí", "Japão"],
        answer: 0
    },
    {
        question: "Qual é o ponto mais profundo dos oceanos?",
        options: ["Fossa das Marianas", "Fossa de Porto Rico", "Fossa do Japão", "Fossa da Groenlândia"],
        answer: 0
    },
    {
        question: "Qual é o maior país da América do Sul em área territorial?",
        options: ["Brasil", "Argentina", "Colômbia", "Peru"],
        answer: 0
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
        input.id = `option${index}`;
        const label = document.createElement('label');
        label.htmlFor = `option${index}`;
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
    resultElement.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
    resultElement.style.display = 'block';
}

showQuestion();

submitButton.addEventListener('click', checkAnswer);
nextButton.addEventListener('click', nextQuestion);
