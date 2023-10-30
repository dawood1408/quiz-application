const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Rome", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Jupiter", "Venus", "Mercury"],
        answer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Giraffe", "Blue Whale", "Hippo"],
        answer: "Blue Whale"
    }
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question').innerText = question.question;

    const optionsList = document.getElementById('options');
    optionsList.innerHTML = '';

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option');
        button.onclick = () => checkAnswer(option);
        optionsList.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestion];
    if (selectedOption === question.answer) {
        score++;
        document.getElementById('score-value').innerText = score;
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        alert(`Quiz finished! Your score is: ${score}`);
        // Additional actions after finishing the quiz can be added here
    }
}

// Display the first question when the page loads
displayQuestion();
