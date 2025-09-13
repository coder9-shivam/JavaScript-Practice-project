const counterDisplayEl = document.getElementById('counterDisplay');
const addBtnEl = document.getElementById('counterAdd');
const subBtnEl = document.getElementById('counterSub');
const minLimit = 0;
const maxLimit = 20;

let total = JSON.parse(localStorage.getItem('number')) || 0;

const updateCounterDisplay = () => {
  counterDisplayEl.textContent = total;
  document.body.style.setProperty(
    'background-color', `rgb(${(total / maxLimit) * 255}, 64, 0)`
  );
}

updateCounterDisplay();

addBtnEl.addEventListener('click', () => {
  if(total < maxLimit) {
    total++;
    updateCounterDisplay();
    localStorage.setItem('number', JSON.stringify(total));
  }
});

subBtnEl.addEventListener('click', () => {
  if(total > minLimit) {
    total--;
    updateCounterDisplay();
    localStorage.setItem('number', JSON.stringify(total));
  }
});