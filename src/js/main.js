
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