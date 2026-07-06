function checkAnswer(num, correct) {
  const input = document.getElementById('input' + num);
  const status = document.getElementById('status' + num);
  const val = input.value.trim().toLowerCase();

  if (val === correct.toLowerCase()) {
    status.textContent = '';
    input.disabled = true;
    const next = document.getElementById('q' + (num + 1));
    if (next) {
      next.style.display = 'block';
      next.querySelector('input').focus();
    } else {
      document.getElementById('quiz').insertAdjacentHTML(
        'beforeend',
        '<div class="terminal">&gt; Поздравляю!</div>'
      );
    }
  } else if (val.length > 0) {
    status.textContent = ' ✘';
  } else {
    status.textContent = '';
  }
}