
const { v4: uuidv4 } = require("uuid");

class Task {
  /**
   * Create a new Task
   * @param {Object} options - Task properties
   * @param {string} options.title - Title of the task
   * @param {string} options.description - Description of the task
   * @param {string} options.dueDate - Due date in YYYY-MM-DD format
   * @param {string} options.priority - Priority (Low, Medium, High)
   * @param {string} [options.status] - Status (Pending, Completed)
   * @param {string} [options.id] - Unique ID (for loading from file)
   * @param {string} [options.createdAt] - Creation timestamp
   */
  constructor({
    title,
    description,
    dueDate,
    priority,
    status = "Pending",
    id = uuidv4(),
    createdAt = new Date().toISOString(),
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status;
    this.createdAt = createdAt;
  }

  // Getters and setters for encapsulation
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

  getDueDate() {
    return this.dueDate;
  }
  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  getPriority() {
    return this.priority;
  }
  setPriority(priority) {
    this.priority = priority;
  }

  getStatus() {
    return this.status;
  }
  setStatus(status) {
    this.status = status;
  }

  getId() {
    return this.id;
  }
  getCreatedAt() {
    return this.createdAt;
  }

  // Serialize to plain object for saving
  toJSON() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority,
      status: this.status,
      createdAt: this.createdAt,
    };
  }

  // Static method to create a Task from a plain object
  static fromJSON(obj) {
    return new Task(obj);
  }
}

module.exports = Task;
