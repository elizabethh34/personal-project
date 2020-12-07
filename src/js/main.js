
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
    this.descriptionInputValue = document.querySelector('.description-input');
    this.dateInputValue = document.querySelector('.date-input');
  }
}