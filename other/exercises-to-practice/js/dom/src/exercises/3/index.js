const btnBlue = document.getElementById('btn-blue');

const changeColorTxt = () => {
  btnBlue.style.color = 'blue';
}

btnBlue.addEventListener('click', () => changeColorTxt());