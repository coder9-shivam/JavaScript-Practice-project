const getLoremIpsum = numberOfParagraphs => {
  fetch(`https://baconipsum.com/api/?type=meat-and-filler&paras=${numberOfParagraphs}`)
    .then(response => response.json())
    .then(loremIpsumTextArray => {
      updateResult(loremIpsumTextArray);
    });
};

const addCopyBtn = text => {
  const resultEl = document.getElementById('result');
  const copyBtn = document.createElement('button');

  copyBtn.textContent = 'Copy';
  copyBtn.classList.add('copy');

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(text);
    copyBtn.textContent = 'Copied';
    setTimeout(() => {
      copyBtn.textContent = 'Copy';
    }, 2000);
  });
  
  resultEl.appendChild(copyBtn);
}

const updateResult = textArray => {
  const resultEl = document.getElementById('result');
  resultEl.innerHTML = '';
  resultEl.innerHTML = textArray
    .map(paragraph => `<p>${paragraph}</p>`)
    .join('');

  addCopyBtn(textArray.join(''));
  resultEl.classList.add('show');
};

const getLoremIpsumBtnEl = document.getElementById('getLoremIpsum');
const paragraphsCountEl = document.getElementById('paragraphsCount');

getLoremIpsumBtnEl.addEventListener('click', () => {
  getLoremIpsum(parseInt(paragraphsCountEl.value));
  paragraphsCountEl.value = '';
});