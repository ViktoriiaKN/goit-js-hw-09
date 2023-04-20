function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

const isColorChanging = false;

btnStart.addEventListener('click', () => {
    if (!isColorChanging) {
        btnStart.disabled = true;
        const intervalId = setInterval(() => {
            document.body.style.backgroundColor = getRandomHexColor();
        }, 1000);
        btnStop.addEventListener('click', () => {
            clearInterval(intervalId);
            startButton.disabled = false;
        })
    }
});
