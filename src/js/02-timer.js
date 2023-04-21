// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
// Додаткова бібліотека
import Notiflix, { Notify } from 'notiflix';

const dateInput = document.querySelector('#datetime-picker');
const inputVal = dateInput.value;
const startBtn = document.querySelector('button[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
let timerId;

startBtn.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0].getTime());
 

if (selectedDates[0].getTime() - options.defaultDate.getTime() > 0) {
    startBtn.removeAttribute('disabled', true);
} else {
    Notify.failure("Please choose a date in the future");
        }
    },
};

flatpickr(dateInput, options);

const startBtnClick = () => {
    startBtn.setAttribute('disabled', true);
    timerId - setInterval(() => {
        if (1681471457000 - Date.now() < 0) {
            clearInterval(timerId);
        } else {
            convertMs(1681471457000 - Date.now());
        }
        console.log(1681471457000 - Date.now());
    }, 1000);
}

startBtn.addEventListener('click', startBtnClick);
