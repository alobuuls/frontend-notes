const btnItemNum = document.getElementById('btn-item-num');
const ctnItemNum = document.getElementById('ctn-item-num');
let numeration = document.getElementsByClassName('item-list-num').length;

const addItemNum = () => {
  const newItemNum = document.createElement('li');
  numeration++;
  newItemNum.textContent = `Item ${numeration}`;
  ctnItemNum.append(newItemNum);
}

btnItemNum.addEventListener('click', () => addItemNum())