const btnTime = document.querySelector('.main');
const btnReset = document.querySelector('.reset');
const panel = document.querySelector('div.time>div');

let time = 0;
let active = false;
let idI;

const timer = () => {
  if (!active) {
    time++;
    active = !active;
    btnTime.textContent = "Pauza";
    idI = setInterval(start, 10);
  } else {
    active = !active
    btnTime.textContent = "Start";
    clearInterval(idI);
  }
}

const start = () => {
  time++
  panel.textContent = (time / 100).toFixed(2);
}

const reset = () => {
  time = 0;
  panel.textContent = '---';
  active = false;
  clearInterval(idI);
  btnTime.textContent = "Start";
}

btnTime.addEventListener('click', timer);
btnReset.addEventListener('click', reset);





