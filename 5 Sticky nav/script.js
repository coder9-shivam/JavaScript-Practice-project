const navEl = document.querySelector('nav');
const navLinkEl = navEl.querySelectorAll('a');

const navPosition = navEl.getBoundingClientRect().top;

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  navEl.style.top = scrollPosition + 'px';

  navLinkEl.forEach(link => {
    const sectionEl = document.querySelector(link.hash);
    const offset = 50;

    if (scrollPosition + offset > sectionEl.offsetTop && scrollPosition + offset < sectionEl.offsetTop + sectionEl.offsetHeight) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});