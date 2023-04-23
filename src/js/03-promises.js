import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputForm = document.querySelector('input');
const submitBtn = document.querySelector('button');
const formRef = document.querySelector('.form');

formRef.addEventListener('submit', onSubmitForm);

function onSubmitForm() {
  
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

