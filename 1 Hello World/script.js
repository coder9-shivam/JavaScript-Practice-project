const nameEl = document.querySelector('.name-el');
const buttonEl = document.querySelector('.btn-el');

buttonEl.addEventListener('click', () => {
  nameEl.textContent = prompt("Enter you name: ");
});