
class TodoTask {
  constructor(description, targetdate) {
    this.description = description;
    this.targetDate = targetdate;
    this.dateAdded;
    this.id;
  }
}

class TodoList {
  constructor() {
    this.todoTasks = [];
    this.id = 0;
  }

  addTask(description, targetDate) {
    const newTask = new TodoTask(description, targetDate);
    newTask.id = this.id;
    this.id++;
    this.todoTasks.push(newTask);
  }
}

class UI {
  constructor() {
    this.todoList = new TodoList();
    this.submitButtonElem = document.querySelector('.submit');
    this.todoListElem = document.querySelector('.todo-list');
  }

  renderList() {
    this.todoListElem.innerHTML = "";
    this.todoList.todoTasks.forEach(task => {
      this.todoListElem.insertAdjacentHTML("afterbegin", 
      `<li data-id>
        <div class="task-info">
          <div class="task-description">${task.description}</div>
          <div class="date-added">${task.dateAdded}</div>
        </div>
        <div class="task-side">
          <div class="target-date">${task.targetDate}</div>
          <div class="remove">
            <i class="fas fa-minus-circle"></i>
          </div>
        </div> 
      </li>`);
    });
  }
}

const listUI = new UI();