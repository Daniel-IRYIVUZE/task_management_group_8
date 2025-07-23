const inquirer = require('inquirer');

function printBanner() {
  console.log('==============================');
  console.log('     TASK MANAGER CLI APP      ');
  console.log('==============================\n');
}

function mainMenu() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'Add Task',
        'View Tasks',
        'Update Task',
        'Delete Task',
        'Exit'
      ]
    }
  ]);
}

function promptTaskDetails() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Task Title:',
      validate: input => input ? true : 'Title is required.'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description (optional):'
    },
    {
      type: 'input',
      name: 'dueDate',
      message: 'Due Date (YYYY-MM-DD):',
      validate: input => !isNaN(Date.parse(input)) ? true : 'Enter a valid date.'
    },
    {
      type: 'list',
      name: 'priority',
      message: 'Priority:',
      choices: ['Low', 'Medium', 'High']
    }
  ]);
}

function promptTaskId() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'id',
      message: 'Enter Task ID:',
      validate: input => input ? true : 'Task ID is required.'
    }
  ]);
}

function promptUpdateTask() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'New Title (leave blank to keep unchanged):'
    },
    {
      type: 'input',
      name: 'description',
      message: 'New Description (leave blank to keep unchanged):'
    },
    {
      type: 'input',
      name: 'dueDate',
      message: 'New Due Date (YYYY-MM-DD, leave blank to keep unchanged):',
      validate: input => !input || !isNaN(Date.parse(input)) ? true : 'Enter a valid date.'
    },
    {
      type: 'list',
      name: 'priority',
      message: 'New Priority (leave blank to keep unchanged):',
      choices: ['Low', 'Medium', 'High', 'Skip'],
      filter: val => val === 'Skip' ? undefined : val
    },
    {
      type: 'list',
      name: 'status',
      message: 'New Status (leave blank to keep unchanged):',
      choices: ['Pending', 'Completed', 'Skip'],
      filter: val => val === 'Skip' ? undefined : val
    }
  ]).then(answers => {
    // Remove blank/skip fields
    Object.keys(answers).forEach(key => {
      if (!answers[key]) delete answers[key];
    });
    return answers;
  });
}

function promptFilterOptions() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'filter',
      message: 'Filter tasks by:',
      choices: [
        { name: 'No Filter (Show All)', value: {} },
        { name: 'Status', value: { status: 'Pending' } },
        { name: 'Priority', value: { priority: 'High' } },
        { name: 'Due Date (Today or earlier)', value: { dueDate: new Date().toISOString().split('T')[0] } },
        { name: 'Keyword', value: { keyword: '' } }
      ]
    },
    {
      type: 'input',
      name: 'keyword',
      message: 'Enter keyword to search:',
      when: answers => answers.filter.keyword !== undefined,
      validate: input => input ? true : 'Keyword is required.'
    }
  ]).then(answers => {
    if (answers.filter.keyword !== undefined) {
      answers.filter.keyword = answers.keyword;
    }
    return answers;
  });
}

module.exports = {
  printBanner,
  mainMenu,
  promptTaskDetails,
  promptTaskId,
  promptUpdateTask,
  promptFilterOptions
}; 