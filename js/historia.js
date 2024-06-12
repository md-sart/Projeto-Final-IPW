const questions = [
    {
        question: "Quem foi o primeiro presidente dos Estados Unidos?",
        options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
        answer: 1
    },
    {
        question: "Em que ano começou a Segunda Guerra Mundial?",
        options: ["1914", "1939", "1945", "1950"],
        answer: 1
    },
    {
        question: "Quem era o imperador da França durante as Guerras Napoleônicas?",
        options: ["Luís XVI", "Carlos Magno", "Napoleão Bonaparte", "Luís XIV"],
        answer: 2
    },
    {
        question: "Quem foi o responsável pela descoberta do Brasil?",
        options: ["Cristóvão Colombo", "Vasco da Gama", "Pedro Álvares Cabral", "Fernando de Magalhães"],
        answer: 2
    },
    {
        question: "Quem foi o principal autor da Declaração de Independência dos Estados Unidos?",
        options: ["George Washington", "Benjamin Franklin", "Thomas Jefferson", "John Adams"],
        answer: 2
    },
    {
        question: "Em que ano ocorreu a Revolução Francesa?",
        options: ["1789", "1776", "1804", "1812"],
        answer: 0
    },
    {
        question: "Qual civilização construiu as pirâmides de Gizé?",
        options: ["Maias", "Astecas", "Egípcios", "Incas"],
        answer: 2
    },
    {
        question: "Quem era o líder da União Soviética durante a Segunda Guerra Mundial?",
        options: ["Lenin", "Trotsky", "Stalin", "Gorbachev"],
        answer: 2
    },
    {
        question: "Em que ano ocorreu a queda do Muro de Berlim?",
        options: ["1985", "1989", "1991", "1993"],
        answer: 1
    },
    {
        question: "Quem foi o primeiro homem a viajar ao espaço?",
        options: ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "John Glenn"],
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
