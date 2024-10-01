function addButtonToTask(task, buttonText, className, onClickHandler) {
  var button = document.createElement("button");
  button.textContent = buttonText;
  button.className = className;
  button.onclick = onClickHandler;
  task.appendChild(button);
}

function addTask() {
  var taskInput = document.getElementById("todo-input");
  var taskText = taskInput.value.trim();
  
  if (taskText.length === 0 || !taskText) {
      return;
  }

  var taskItem = document.createElement("li");
  taskItem.textContent = taskText;

  addButtonToTask(taskItem, "완료", "", function() {
      moveTask(taskItem, "todo-list", "done-list");
  });

  document.getElementById("todo-list").appendChild(taskItem);
  taskInput.value = ""; 
}

function moveTask(task, fromListId, toListId) {
  var fromList = document.getElementById(fromListId);
  var toList = document.getElementById(toListId);

  fromList.removeChild(task);

  var doneButton = task.querySelector('button');
  task.removeChild(doneButton);

  addButtonToTask(task, "삭제", "delete-btn", function() {
      deleteTask(task, toListId);
  });

  toList.appendChild(task);
}

function deleteTask(task, listId) {
  var list = document.getElementById(listId);
  list.removeChild(task);
}

document.getElementById("todo-input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
      event.preventDefault();
      addTask();
  }
});
