var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function () {
  listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = document.getElementById("task-form");
  tasksToDoEl.appendChild(listItemEl);
};

buttonEl.addEventListener("click", createTaskHandler);
