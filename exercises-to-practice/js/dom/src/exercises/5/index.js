const btnDone = document.getElementById('btn-done');

const changeText = () => {
  btnDone.textContent = 'Hecho';
}

btnDone.addEventListener('click', () => changeText());