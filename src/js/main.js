
class TodoTask {
  constructor(description, targetdate) {
    this.description = description;
    this.targetDate = targetdate;
    this.dateAdded = this.findDateAdded();
    this.id;
  }

  findDateAdded() {
    const months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const monthNumber = currentDate.getMonth();
    const month = months[monthNumber];
    const day = currentDate.getDate();
  
    return `${month} ${day}, ${year}`;
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

  removeTask(id) {
    this.todoTasks = this.todoTasks.filter(task => task.id !== id);
  }
}

class UI {
  constructor() {
    this.todoList = new TodoList();
    this.submitButtonElem = document.querySelector('.submit');
    this.todoListElem = document.querySelector('.todo-list');
    this.descriptionInputElem = document.querySelector('.description-input');
    this.dateInputElem = document.querySelector('.date-input');
    this.clearAllElem = document.querySelector('.clear-all-button');

    this.submitButtonElem.addEventListener('click', event => {
      if (this.descriptionInputElem.value !== '' && this.dateInputElem.value !== '') {
        this.clickSubmit(this.descriptionInputElem.value, this.dateInputElem.value);
        this.descriptionInputElem.value = '';
        this.dateInputElem.value = '';
      }  
    });

    this.todoListElem.addEventListener('click', event => {
      if (event.target.parentNode.classList.contains('remove')) {
        const taskToRemove = event.target.closest('li');
        this.clickDelete(parseInt(taskToRemove.dataset.id));
      }
    }); 
    
    this.clearAllElem.addEventListener('click', event => {
      this.todoList.todoTasks = [];
      this.renderList();
    });
  }

  clickSubmit(description, targetDate) {
    this.todoList.addTask(description, targetDate);
    this.renderList();
  }

  clickDelete(id) {
    this.todoList.removeTask(id);
    this.renderList();
  }

  renderList() {
    this.todoListElem.innerHTML = "";
    this.todoList.todoTasks.forEach(task => {
      this.todoListElem.insertAdjacentHTML("afterbegin", 
      `<li data-id=${task.id}>
        <div class="task-info">
          <div class="check-mark">
            <i class="fas fa-check"></i>
          </div>
          <div class="description-container">
            <div class="task-description">${task.description}</div>
            <div class="date-added">${task.dateAdded}</div>
          </div>
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