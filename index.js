#!/usr/bin/env node
const mongoose = require('mongoose');
const inquirer = require('inquirer');
const TaskManager = require('./classes/TaskManager');
const { printBanner, mainMenu, promptTaskDetails, promptTaskId, promptUpdateTask, promptFilterOptions } = require('./utils/helpers');

const MONGO_URI = 'mongodb://localhost:27017/task_manager';

async function main() {
  printBanner();
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    const taskManager = new TaskManager();
    let exit = false;
    while (!exit) {
      const { action } = await mainMenu();
      switch (action) {
        case 'Add Task': {
          const taskData = await promptTaskDetails();
          await taskManager.addTask(taskData);
          break;
        }
        case 'View Tasks': {
          const { filter } = await promptFilterOptions();
          await taskManager.viewTasks(filter);
          break;
        }
        case 'Update Task': {
          const { id } = await promptTaskId();
          const updates = await promptUpdateTask();
          await taskManager.updateTask(id, updates);
          break;
        }
        case 'Delete Task': {
          const { id } = await promptTaskId();
          await taskManager.deleteTask(id);
          break;
        }
        case 'Exit':
          exit = true;
          break;
      }
    }
    await mongoose.disconnect();
    console.log('Goodbye!');
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

main(); 
