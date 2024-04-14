const fstops = ["f1.4", "f1.6", "f1.8", "f2", "f2.2", "f2.5", "f2.8", "f3.2", "f3.5", "f4", "f4.5", "f5", "f5.6", "f6.3", "f7.1", "f8", "f9", "f10", "f11", "f13", "f14", "f16", "f18", "f20", "f22"];
const numberOfQuestions = 10;
let currentQuestion = 0;
let score = 0;
let questions = [];
let answers = [];

function generateQuestions() {
    questions = _.sample(all_questions, numberOfQuestions)
}


function startQuiz() {
    document.getElementById('instructions').style.display = 'none'; // Hide Instructions
    document.getElementById('startButton').style.display = 'none'; // Hide Start Quiz button
    generateQuestions();
    loadQuestion();
}

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const imageElement = document.getElementById('image');
    const answerElement = document.getElementById('answer');
    const feedbackElement = document.getElementById('feedback');
    questionElement.style.display = 'block';
    imageElement.style.display = 'block';
    answerElement.style.display = 'inline-block';
    feedbackElement.style.display = 'inline-block';
    document.getElementById('image-src').href = questions[currentQuestion].imageSource;
    questionElement.textContent = `Question ${currentQuestion+1} of ${numberOfQuestions}: ${questions[currentQuestion].make} ${questions[currentQuestion].model}, ${questions[currentQuestion].focal_length}mm, ${questions[currentQuestion].exposure_time}s, ISO${questions[currentQuestion].iso}.`;
    imageElement.src = questions[currentQuestion].imageUrl;
    imageElement.href = questions[currentQuestion].imageSource;
    answerElement.innerHTML = '';
    fstops.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.text = option;
        answerElement.add(optionElement);
    });
    feedbackElement.textContent = '';
    document.getElementById('checkButton').style.display = 'block'; // Show Check Answer button
    document.getElementById('nextButton').style.display = 'none'; // Hide Next button
}

function checkAnswer() {
    const selectedAnswer = document.getElementById('answer').value;
    const correctAnswer = questions[currentQuestion].aperture;
    const feedbackElement = document.getElementById('feedback');
    let distance = 0;
    if (selectedAnswer === questions[currentQuestion].aperture) {
        feedbackElement.textContent = `True aperture: ${correctAnswer}. Current score: ${Math.round(score*100)/100}.`;
        feedbackElement.classList.add('correct');
        feedbackElement.classList.remove('incorrect');
    } else {
        distance = Math.abs(fstops.indexOf(questions[currentQuestion].aperture) - fstops.indexOf(selectedAnswer))/3;
        score += distance
        feedbackElement.textContent = `True aperture: ${correctAnswer} (Error: ${Math.round(distance*100)/100} stops). Current score: ${Math.round(score*100)/100} stops.`;
        feedbackElement.classList.add('incorrect');
        feedbackElement.classList.remove('correct');
    }
    questions[currentQuestion].selectedAnswer = selectedAnswer;
    questions[currentQuestion].distance = distance;
    document.getElementById('checkButton').style.display = 'none'; // Hide Check Answer button
    if (currentQuestion === questions.length - 1) {
        document.getElementById('nextButton').textContent = 'Show Final Results'; // Change button text
    }
    document.getElementById('nextButton').style.display = 'block'; // Show Next button
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    document.getElementById('question').style.display = 'none';
    document.getElementById('image').style.display = 'none';
    document.getElementById('answer').style.display = 'none';
    document.getElementById('feedback').style.display = 'none';
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `Final score: ${Math.round(score*100)/100} stops. Average error:  ${Math.round(score/questions.length*100)/100} stops. `;
    scoreElement.style.display = 'block';
    document.getElementById('nextButton').style.display = 'none'; // Hide Next button
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Restart';
    restartButton.onclick = function() {
        document.getElementById('nextButton').textContent = 'Next'
        currentQuestion = 0;
        score = 0;
        scoreElement.style.display = 'none';
        document.getElementById('questionList').style.display = 'none'
        generateQuestions();
        loadQuestion();
    };
    scoreElement.appendChild(restartButton);

    // Display questions, answers, and images
    const questionListElement = document.getElementById('questionList');
    questionListElement.innerHTML = '';
    questions.forEach((questionObj, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${questionObj.make} ${questionObj.model}, ${questionObj.focal_length}mm, ${questionObj.exposure_time}s, ISO${questionObj.iso}, ${questionObj.aperture}. Selected ${questionObj.selectedAnswer} (Error: ${Math.round(questionObj.distance*100)/100} stops)`;
        const image_link = document.createElement('a');
        image_link.href = questionObj.imageSource
        const image = document.createElement('img');
        image.src = questionObj.imageUrl;
        image.style= "max-width: 100%; margin-top: 10px; margin-bottom: 10px"
        image_link.appendChild(image);
        listItem.appendChild(image_link);
        questionListElement.appendChild(listItem);
    });
    questionListElement.style.display = 'block'; // Show question list

}

// Load the first question when the page loads
window.onload = function() {
    document.getElementById('startButton').style.display = 'block'; // Show Start Quiz button
};