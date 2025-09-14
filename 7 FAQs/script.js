const dataArray = [
  {
    title: 'Why is javascript cool?',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quaerat maxime culpa minus tenetur eaque hic'
  },
  {
    title: 'What is javascript?',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quaerat maxime culpa minus tenetur eaque hic'
  },
  {
    title: 'how can we use javascirpt?',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quaerat maxime culpa minus tenetur eaque hic'
  },
  {
    title: 'what is javascript methods?',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quaerat maxime culpa minus tenetur eaque hic'
  }
]

const makeHTML = data => {
  return `<details>
    <summary>${data.title}</summary>
    <p>${data.description}</p>
  </details>`;
};

const containerEl = document.getElementById('faq-container');

containerEl.innerHTML = dataArray.map(dataItem => makeHTML(dataItem)).join('');