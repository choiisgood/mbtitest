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

  const mbtiExplanations = {
    'ISTJ': 'Responsible, serious, and reserved. Prefers structure and order.',
    'ISFJ': 'Warm, considerate, and detail-oriented. Values tradition and harmony.',
    'INFJ': 'Insightful, creative, and idealistic. Strives to make the world a better place.',
    'INTJ': 'Strategic, logical, and independent. Visionary thinkers.',
    'ISTP': 'Practical, logical, and flexible. Skilled problem-solvers.',
    'ISFP': 'Gentle, adaptable, and artistic. Values personal freedom and expression.',
    'INFP': 'Sensitive, imaginative, and empathetic. Driven by values and purpose.',
    'INTP': 'Curious, theoretical, and independent. Loves exploring complex ideas.',
    'ESTP': 'Energetic, spontaneous, and pragmatic. Thrives in dynamic environments.',
    'ESFP': 'Outgoing, playful, and adaptable. Lives in the moment.',
    'ENFP': 'Enthusiastic, imaginative, and inspiring. Champions of creativity and individuality.',
    'ENTP': 'Innovative, clever, and curious. Enjoys debating and exploring new ideas.',
    'ESTJ': 'Organized, practical, and direct. Natural leaders and decision-makers.',
    'ESFJ': 'Friendly, dependable, and nurturing. Values social connection and harmony.',
    'ENFJ': 'Charismatic, empathetic, and inspiring. Motivates others to grow and succeed.',
    'ENTJ': 'Confident, strategic, and efficient. Natural leaders with a focus on results.'
  };

  document.getElementById('mbti-type').textContent = mbtiType;
  document.getElementById('mbti-description').textContent =
    mbtiExplanations[mbtiType] || 'Explanation not available.';
  document.getElementById('quiz').classList.add('hidden');
  document.getElementById('result').classList.remove('hidden');
});
