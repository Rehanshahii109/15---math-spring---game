const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer");
const gameOverScreen = document.getElementById("game-over");
const scoreText = document.getElementById("score-text");
const restartButton = document.getElementById("restart-button");

let correctAnswer;
let score = 0;

// Function to generate random numbers and set the question
function generateQuestion() {
	const num1 = Math.floor(Math.random() * 10);
	const num2 = Math.floor(Math.random() * 10);
	correctAnswer = num1 + num2;
	questionElement.textContent = `${num1} + ${num2}`;
	setAnswers();
}

// Function to assign answers randomly to buttons
function setAnswers() {
	const correctButton = Math.floor(Math.random() * 4);
	answerButtons.forEach((button, index) => {
		if (index === correctButton) {
			button.textContent = correctAnswer;
		} else {
			button.textContent = Math.floor(Math.random() * 20);
		}
	});
}

// Function to handle answer clicks
answerButtons.forEach((button) => {
	button.addEventListener("click", () => {
		if (parseInt(button.textContent) === correctAnswer) {
			score++;
			generateQuestion();
		} else {
			endGame();
		}
	});
});

// Function to end the game
function endGame() {
	gameOverScreen.classList.remove("hidden");
	scoreText.textContent = `Your score: ${score}`;
}

// Function to restart the game
restartButton.addEventListener("click", () => {
	gameOverScreen.classList.add("hidden");
	score = 0;
	generateQuestion();
});

// Start the game
generateQuestion();
