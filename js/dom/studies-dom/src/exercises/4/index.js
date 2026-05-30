const txtSize = document.getElementById('txt-size');
const btnFontSize = document.getElementById('btn-font-size');

const changeSize = () => {
  txtSize.style.fontSize = '40px';
}

btnFontSize.addEventListener('click', () => changeSize());