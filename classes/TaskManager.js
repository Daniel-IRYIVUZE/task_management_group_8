const Task = require('./Task');

class TaskManager {
  async addTask(data) {
    try {
      const task = new Task(data);
      await task.save();
      console.log('Task added successfully!');
    } catch (err) {
      console.error('Failed to add task:', err.message);
    }
  }

  async viewTasks(filter = {}) {
    try {
      const query = {};
      if (filter.status) query.status = filter.status;
      if (filter.priority) query.priority = filter.priority;
      if (filter.dueDate) query.dueDate = { $lte: new Date(filter.dueDate) };
      if (filter.keyword) query.title = { $regex: filter.keyword, $options: 'i' };
      const tasks = await Task.find(query).sort({ dueDate: 1 });
      if (tasks.length === 0) {
        console.log('No tasks found.');
        return;
      }
      tasks.forEach((task, idx) => {
        console.log(`\n[${idx + 1}] ${task.title}`);
        console.log(`   ID: ${task.id}`);
        console.log(`   Description: ${task.description}`);
        console.log(`   Due: ${task.dueDate.toDateString()}`);
        console.log(`   Priority: ${task.priority}`);
        console.log(`   Status: ${task.status}`);
        console.log(`   Created: ${task.createdAt.toLocaleString()}`);
      });
    } catch (err) {
      console.error('Failed to view tasks:', err.message);
    }
  }

  async updateTask(id, updates) {
    try {
      const task = await Task.findOne({ id });
      if (!task) {
        console.log('Task not found.');
        return;
      }
      Object.assign(task, updates);
      await task.save();
      console.log('Task updated successfully!');
    } catch (err) {
      console.error('Failed to update task:', err.message);
    }
  }

  async deleteTask(id) {
    try {
      const result = await Task.deleteOne({ id });
      if (result.deletedCount === 0) {
        console.log('Task not found.');
      } else {
        console.log('Task deleted successfully!');
      }
    } catch (err) {
      console.error('Failed to delete task:', err.message);
    }
  }
}

module.exports = TaskManager; 