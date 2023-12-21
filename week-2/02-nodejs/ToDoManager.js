const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');
const ToDo = require('./ToDo.js')

class ToDoManager {

  constructor(filename = 'todos.json') {
    this.todoFilePath = path.join(__dirname, `./${filename}`);
    this.todos = this.readTodos();
  }

  readTodos() {
    try {
      const todoFile = fs.readFileSync(this.todoFilePath, 'utf8');
      return JSON.parse(todoFile) || [];
    } catch(e) {
      return [];
    }
  }

  writeTodos() {
    try {
      let stringifiedTodos = JSON.stringify(this.todos);
      fs.writeFileSync(this.todoFilePath, stringifiedTodos);
      return true;
    } catch(e) {
      return false;
    }
  }
  
  createTodo(title, description) {
    const id = uuidv4();
    const todo = new ToDo(id, title, description);
    this.todos.push(todo);
    this.writeTodos(); 
    return id;
  }

  getTodo(id) {
    for (let i = 0; i < this.todos.length; i++) {
      let todo = this.todos[i];
      if (todo.id == id) 
        return todo;
    }
    return null;
  }

  updateTodo(id, updatedTodo) {
    let todo = this.getTodo(id);

    if (todo == null) 
      return false;

    if (updatedTodo['title'])
      todo.setTitle(updatedTodo['title']);
    if (updatedTodo['description'])
      todo.setDescription(updatedTodo['description']);
    if (updatedTodo['completed'])
      todo.setIsCompleted(updatedTodo['completed']);

    this.writeTodos();

    return true;
  }

  deleteTodo(id) {
    let isTodoExists = false;
    this.todos = this.todos.filter((todo) => {
      if (todo.id == id) {
        isTodoExists = true;
        return false;
      } else {
        return true;
      }
    });
    this.writeTodos();
    if (isTodoExists) return true;
    return false;
  }

}

module.exports = ToDoManager;
