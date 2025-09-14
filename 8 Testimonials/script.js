const containerEl = document.getElementById('testimonials-container');

const testimonials = [
  {
    author: {
      name: 'Grbriel Moore',
      image: 'author-01.jpg'
    },
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quibusdam voluptas doloremque, possimus, fugit repellendus vero consectetur odit harum deserunt, nulla vitae facere! Doloribus reiciendis saepe, error eaque dignissimos dicta?',
    date: '24rd May',
  },
  {
    author: {
      name: 'Billy Baily',
      image: 'author-02.jpg'
    },
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quibusdam voluptas doloremque, possimus, fugit repellendus vero consectetur odit harum deserunt, nulla vitae facere! Doloribus reiciendis saepe, error eaque dignissimos dicta?',
    date: '25th May',
  },
  {
    author: {
      name: 'Jackie Oliver',
      image: 'author-03.jpg'
    },
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quibusdam voluptas doloremque, possimus, fugit repellendus vero consectetur odit harum deserunt, nulla vitae facere! Doloribus reiciendis saepe, error eaque dignissimos dicta?',
    date: '24rd July',
  },
  {
    author: {
      name: 'Pauline Carter',
      image: 'author-04.jpg'
    },
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quibusdam voluptas doloremque, possimus, fugit repellendus vero consectetur odit harum deserunt, nulla vitae facere! Doloribus reiciendis saepe, error eaque dignissimos dicta?',
    date: '24rd August',
  }
];

const makeTestimonialsCard = testimonial => {
  return `
  <div class="testimonial-card">
    <img src="${testimonial.author.image}" alt="Testimonials-image" >
    <h2>${testimonial.author.name}</h2>
    <p>${testimonial.text}</p>
    <date>Written on ${testimonial.date}</date>
  </div>`;
}

let currentTestimonial = 0;

const nextTestimonial = () => {
  if (currentTestimonial < testimonials.length - 1) {
    currentTestimonial++;
    updatePage();
  }
}

const prevTestimonial = () => {
  if (currentTestimonial > 0) {
    currentTestimonial--;
    updatePage();
  }
}

const updatePage = () => {
  let markup = makeTestimonialsCard(testimonials[currentTestimonial]);

  if (testimonials.length > 1) {
    markup += `<nav>
      <button onclick="prevTestimonial()">Previous</button>
      <button onclick="nextTestimonial()">Next</button>
    </nav>`
  }
  containerEl.innerHTML = markup;
};

updatePage();