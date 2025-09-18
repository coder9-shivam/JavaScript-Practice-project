const carStart = (carNumber, maxTime = 5) => {
  return new Promise((resolve, reject) => {
    const randomTime = Math.floor(Math.random() * maxTime) * 1000;
    console.log(randomTime);

    setTimeout(() => {
      resolve(carNumber)
    }, randomTime);
  });
}

const carsOrder = [];

const updateDisplay = () => {
  const raceElement = document.getElementById('race');
  raceElement.innerHTML = '';
  carsOrder.forEach((id, position) => {
    raceElement.innerHTML += `
      <div>
        <img src="car-${id}.png"><span>#${position + 1} place</span>
      </div>
      `;
  });
}

carStart(1)
  .then(result => {
    console.log(result);
    carsOrder.push(result);
  }).then(updateDisplay);

carStart(2)
  .then(result => {
    console.log(result);
    carsOrder.push(result);
  }).then(updateDisplay);