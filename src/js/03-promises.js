import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

form.addEventListener('submit', onCreatePromise);

let timerID = null;

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(position, delay);
      } else {
        reject(position, delay);
      }
    }, delay);
  });
}


function onCreatePromise (e){
  e.preventDefault();
  clearTimeout(timerID);

  


}
