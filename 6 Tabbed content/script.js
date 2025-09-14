const navEl = document.querySelector('nav');
const navLinksEl = navEl.querySelectorAll('a');
const sectionEls = document.querySelectorAll('section');

const removeActiveElement = () => {
  navLinksEl.forEach(link => link.parentElement.classList.remove('active'));
};

const hideSection = () => {
  sectionEls.forEach(section => section.classList.add('hidden'));
};

navLinksEl.forEach(link => {
  link.addEventListener('click', () => {
    removeActiveElement();
    hideSection();
    link.parentElement.classList.add('active');
    const sectionEl = document.querySelector(link.hash);
    sectionEl.classList.remove('hidden');
  });
});