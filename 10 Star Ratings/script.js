const initialQuestions = [
  {
    label: 'Friendliness',
    rating: 0
  },
  {
    label: 'Cleanliness',
    rating: 0
  },
  {
    label: 'Food',
    rating: 0
  },
  {
    label: 'Service',
    rating: 0
  }
];

const storedQuestions = JSON.parse(localStorage.getItem('storedQuestions'));

const questions = storedQuestions || initialQuestions;

const makeStarRating = question => {
  const container = document.createElement('div');
  const label = document.createElement('label');
  label.textContent = question.label;
  container.appendChild(label);
  container.appendChild(makeStars(5, question));

  return container;
}

const makeStars = (maxValue, question) => {
  const starContainer = document.createElement('div');

  for (let starPosition = 1; starPosition <= maxValue; starPosition++) {
    const starEl = document.createElement('span');
    starContainer.appendChild(starEl);

    if (starPosition <= question.rating) {
      starEl.classList.add('filled');
    } else {
      starEl.classList.add('empty');
    }

    starEl.addEventListener('click', () => {
      for (let i = 0; i < maxValue; i++) {
        if (i < starPosition) {
          starContainer.children[i].classList.add('filled');
        } else {
          starContainer.children[i].classList.remove('filled');
          starContainer.children[i].classList.add('empty');
        }
      }

      question.rating = starPosition;
      localStorage.setItem('storedQuestions', JSON.stringify(questions));
    });

  }

  return starContainer;
}

const ratingsEl = document.getElementById('ratings');

questions.forEach(question => {
  ratingsEl.appendChild(makeStarRating(question));
});







