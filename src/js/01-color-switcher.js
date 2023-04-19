function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

const isColorChanging = false;

startButton.addEventListener('click', () => {
    if (!isColorChanging) {
        isColorChanging = true;
        startButton.disabled = true;
        const intervalId = setInterval(() => {
            document.body.style.backgroundColor = getRandomHexColor();
        }, 1000);
        stopButton.addEventListener('click', () => {
            clearInterval(intervalId);
            isColorChanging = false;
            startButton.disabled = false;
        })
    }
});
