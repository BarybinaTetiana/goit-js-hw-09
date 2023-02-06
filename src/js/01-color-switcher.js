const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyColor = document.body;

startBtn.addEventListener('click', onStartColor);
stopBtn.addEventListener('click', onStopColor);

let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStartColor() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  timerId = setInterval(() => {
    bodyColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopColor() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(timerId);
}
