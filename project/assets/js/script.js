var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function (event) {
  event.preventDefault();

  listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "Please add your task";
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);
