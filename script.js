document.getElementById('submit-btn').addEventListener('click', () => {
  const answers = new FormData(document.getElementById('quiz-form'));
  let mbtiType = '';
  let preferences = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  for (let [key, value] of answers.entries()) {
    preferences[value]++;
  }

  mbtiType += preferences.E > preferences.I ? 'E' : 'I';
  mbtiType += preferences.S > preferences.N ? 'S' : 'N';
  mbtiType += preferences.T > preferences.F ? 'T' : 'F';
  mbtiType += preferences.J > preferences.P ? 'J' : 'P';

  document.getElementById('mbti-type').textContent = mbtiType;
  document.getElementById('mbti-description').textContent = `Your MBTI type is ${mbtiType}.`;
  document.getElementById('quiz').classList.add('hidden');
  document.getElementById('result').classList.remove('hidden');
});