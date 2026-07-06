function checkAnswer(questionNumber, correctAnswer) {
  const input = document.getElementById('input' + questionNumber);
  const userAnswer = input.value.trim().toLowerCase();

  if (userAnswer === correctAnswer.toLowerCase()) {
    // Show the next question
    const nextQuestion = document.getElementById('q' + (questionNumber + 1));
    if (nextQuestion) {
      nextQuestion.style.display = 'block';
    }
    // Optional: lock this input so it can't be changed
    input.disabled = true;
  }
}
d