// Obtiene el input donde el usuario escribe la tarea
const taskInput = document.getElementById('task-input');

// Obtiene el botón para agregar tareas
const btnAddTask = document.getElementById('btn-add');

// Obtiene el formulario completo
const formTasks = document.getElementById('form-tasks');

// Obtiene el contenedor (ul o similar) donde se mostrarán las tareas
const ctnTasklist = document.getElementById('ctn-task-list')

// Función que crea una nueva tarea en la lista
const createTask = () => {
  // Crea un nuevo elemento <li>
  const taskListItem = document.createElement('li');
  
  // Le asigna como texto lo que el usuario escribió en el input
  taskListItem.textContent = taskInput.value;
  
  // Agrega el <li> dentro del contenedor de la lista
  ctnTasklist.append(taskListItem);
}

// Función que limpia el input
const clearInput = () => {
  // Resetea el formulario (borra todos sus campos)
  formTasks.reset();
}

// Escucha el evento "submit" del formulario
formTasks.addEventListener('submit', e => {
  // Evita que el formulario recargue la página
  e.preventDefault();

  // Verifica que el input no esté vacío (trim quita espacios)
  if (taskInput.value.trim() !== '') {
    // Si hay texto, crea la tarea
    createTask();
    
    // Limpia el input
    clearInput();
    
    // Sale de la función
    return;
  }

  // Si el input está vacío, muestra una alerta
  alert('Debes escribir al menos un cáracter');
});
