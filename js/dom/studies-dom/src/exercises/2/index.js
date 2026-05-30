let txtGreet = document.getElementById('txt-greet');
let btnChangeTxt = document.getElementById('btn-change-txt');

const changeTxt = () => {
  txtGreet.textContent = 'Boton Presionado';
}

btnChangeTxt.addEventListener('click', () => changeTxt());