const itemListColor = document.getElementById('item-list-color');

const changeBg = () => {
  itemListColor.classList.add('active');
}

itemListColor.addEventListener('click', () => changeBg());