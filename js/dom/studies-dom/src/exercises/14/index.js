const ctnItemTasks = document.getElementById('ctn-items-tasks');
const completedTask = document.getElementById('completed-tasks');

ctnItemTasks.addEventListener('change', ({target}) => {
  if (!target.classList.contains('check-task')) return;      
  const checkedCheckboxes = document.querySelectorAll('.check-task:checked').length;
  completedTask.textContent = `Tareas completadas: ${checkedCheckboxes}`;
});