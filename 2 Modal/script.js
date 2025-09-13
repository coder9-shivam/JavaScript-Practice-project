const modalBtnEl = document.querySelector('.modal-btn');
const modalEl = document.querySelector('.modal');
const modalContentEl = modalEl.querySelector('.modal__content');

modalBtnEl.addEventListener('click', () => {
  modalEl.classList.add('open');
});

modalContentEl.addEventListener('click', () => {
  modalEl.classList.remove('open');
});