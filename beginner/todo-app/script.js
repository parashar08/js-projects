window.onload = function () {
  loadTask();
};

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const task = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };

  let tasks = getTaskFromStorage();
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
  renderTask();
}

function getTaskFromStorage() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

function renderTask() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  const tasks = getTaskFromStorage();

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";
    li.innerHTML = `
                <span onclick="toggleTask(${task.id})">${task.text}</span>
                <button class="delete-btn" onclick="deleteTask(${task.id})">X</button>
        `;
    taskList.appendChild(li);
  });
}

function toggleTask(id) {
  let tasks = getTaskFromStorage();
  tasks = tasks.map((task) => {
    if (task.id === id) {
      task.completed = !task.completed;
      return task;
    }
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTask();
}

function deleteTask(id) {
  let tasks = getTaskFromStorage();
  tasks = tasks.filter((task) => task.id !== id);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTask();
}

function loadTask() {
  renderTask();
}
