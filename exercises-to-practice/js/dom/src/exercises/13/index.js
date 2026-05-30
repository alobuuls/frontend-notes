const ctnHouseList = document.querySelector('.house-task-list');

ctnHouseList.addEventListener('click', ({target}) => {
  const task = target.closest('.task');
  const isDone = task.dataset.done === 'true';
  task.dataset.done = !isDone;
  isDone ? task.classList.remove('done') : task.classList.add('done');
});