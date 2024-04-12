document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');

  form.addEventListener('submit', function(event) {
      event.preventDefault();

      const taskInput = document.getElementById('new-task-description');
      const taskDescription = taskInput.value;

      const taskItem = document.createElement('li');

      taskItem.textContent = taskDescription;

      const taskList = document.getElementById('tasks');
      taskList.appendChild(taskItem);

      taskInput.value = '';
  });
});
