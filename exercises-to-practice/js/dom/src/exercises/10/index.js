const listTasks = document.getElementById('list-tasks');

const removeItem = currentEl => {
  currentEl.remove();
}

listTasks.addEventListener('dblclick', ({target}) => {
  const item = target.closest('.task-item');
  if ( !item ) return;
  removeItem(item);
});