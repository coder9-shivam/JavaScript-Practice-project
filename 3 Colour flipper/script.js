const currentColorEl = document.getElementById("current-colour");
const colorBtnEl = document.getElementById("new-colour-btn");
const colorDisplayEl = document.getElementById('colour-display');

const hexValue = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

function getRandomHexValue() {
  let randomPosition = Math.floor(
    Math.random() * hexValue.length);

  const randomHexValue = hexValue[randomPosition];

  return randomHexValue;
}

function getRandomColor(stringLength) {
  let hexString = "";
  for(let i = 0; i < stringLength; i++){
    hexString += getRandomHexValue();
  }
  return hexString;
}

colorBtnEl.addEventListener("click", () => {
  const randomHexString = "#" + getRandomColor(6);
  currentColorEl.textContent = randomHexString;
  document.body.style.setProperty(
    'background-color', randomHexString
  );
});
