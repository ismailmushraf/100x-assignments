class Todo {
  constructor(id,title, description) {
    this.id = id; 
    this.title = title;    
    this.description = description;
    this.completed = false;
  }

  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }

  setTitle(title) {
    this.title = title;
  }

  getDescription() {
    return this.description;
  }

  setDescription(description) {
    this.description = description;
  }

  isCompleted() {
    return this.completed;
  }

  setIsCompleted(completed) {
    this.completed = completed;
  }
}

module.exports = Todo;
