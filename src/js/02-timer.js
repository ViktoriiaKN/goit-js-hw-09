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

daysEl.textContent = `${daysEl}`;
hoursEl.textContent = `${hoursEl}`;
minutesEl.textContent = `${minutesEl}`;
secondsEl.textContent = `${secondsEl}`;

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

const datePicker = flatpickr(dateInput, options);

const startBtnClick = () => {
    startBtn.setAttribute('disabled', true);
    timerId = setInterval(() => {
        const differentTime = datePicker.selectedDates[0].getTime() - Date.now()
        if (differentTime < 1000) {
            clearInterval(timerId);
            return;
        } 
        const convertedTime = convertMs(differentTime);
        
        console.log(convertedTime);
    }, 1000);
}

startBtn.addEventListener('click', startBtnClick);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
