function checkAnswer(num, correct) {
  const input = document.getElementById('input' + num);
  if (input.value.trim().toLowerCase() === correct.toLowerCase()) {
    input.disabled = true;
    const next = document.getElementById('q' + (num + 1));
    if (next) {
      next.style.display = 'block';
      next.querySelector('input').focus();
    }
  }
}
