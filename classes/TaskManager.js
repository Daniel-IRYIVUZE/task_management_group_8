// Manages the collection of tasks and handles file persistence
const fs = require("fs");
const path = require("path");
const Task = require("./Task");
const {
  isValidDate,
  isValidPriority,
  isValidStatus,
} = require("../utils/helpers");

class TaskManager {
  constructor(filePath = path.join(__dirname, "../data/tasks.json")) {
    this.filePath = filePath;
    this.tasks = [];
    this.loadTasks();
  }

  // Load tasks from file
  loadTasks() {
    try {
      if (fs.existsSync(this.filePath)) {
        const data = fs.readFileSync(this.filePath, "utf-8");
        const arr = JSON.parse(data);
        this.tasks = arr.map((obj) => Task.fromJSON(obj));
      } else {
        this.tasks = [];
      }
    } catch (err) {
      console.error("Error loading tasks:", err.message);
      this.tasks = [];
    }
  }

  // Save tasks to file
  saveTasks() {
    try {
      fs.writeFileSync(
        this.filePath,
        JSON.stringify(
          this.tasks.map((t) => t.toJSON()),
          null,
          2,
        ),
      );
    } catch (err) {
      console.error("Error saving tasks:", err.message);
    }
  }

  // Add a new task
  addTask({ title, description, dueDate, priority }) {
    if (!title || !isValidDate(dueDate) || !isValidPriority(priority)) {
      throw new Error("Invalid task data.");
    }
    const task = new Task({ title, description, dueDate, priority });
    this.tasks.push(task);
    this.saveTasks();
    return task;
  }

  // Get all tasks
  getAllTasks() {
    return this.tasks;
  }

  // Find a task by ID
  getTaskById(id) {
    return this.tasks.find((t) => t.id === id);
  }

  // Update a task by ID
  updateTask(id, updates) {
    const task = this.getTaskById(id);
    if (!task) throw new Error("Task not found.");
    if (updates.title) task.setTitle(updates.title);
    if (updates.description) task.setDescription(updates.description);
    if (updates.dueDate && isValidDate(updates.dueDate))
      task.setDueDate(updates.dueDate);
    if (updates.priority && isValidPriority(updates.priority))
      task.setPriority(updates.priority);
    if (updates.status && isValidStatus(updates.status))
      task.setStatus(updates.status);
    this.saveTasks();
    return task;
  }

  // Delete a task by ID
  deleteTask(id) {
    const idx = this.tasks.findIndex((t) => t.id === id);
    if (idx === -1) throw new Error("Task not found.");
    const [removed] = this.tasks.splice(idx, 1);
    this.saveTasks();
    return removed;
  }
}

module.exports = TaskManager;
