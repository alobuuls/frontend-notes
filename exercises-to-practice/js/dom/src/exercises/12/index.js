const inputMarketList = document.getElementById('input-market-list');
const btnMarketList = document.getElementById('btn-market-list');
const ctnMarketList = document.getElementById('ctn-market-list');
let qtyItems = document.querySelectorAll('.to-buy').length;

const createProduct = () => {
  const newProduct = document.createElement('li');
  return newProduct;
}

const setProductInfo = el => {
  el.textContent = inputMarketList.value;
  el.dataset.id = qtyItems;
  el.dataset.done = 'false';
}

const addProductToCtnMarketList = newProductEl => {
  ctnMarketList.append(newProductEl);
}

const resetInput = () => {
  inputMarketList.value = '';
}

btnMarketList.addEventListener('click', () => {
  const newEl = createProduct();
  qtyItems++;
  setProductInfo(newEl);
  addProductToCtnMarketList(newEl);
  resetInput();
  alert('Se ha insertado un nuevo producto');
});