# Task Manager CLI Application

A simple, offline, command-line task manager built with Node.js, OOP principles, and file-based persistence. So it's meant to manage your daily tasks efficiently with a user-friendly CLI.

## Features

- Add, view, update, and delete tasks
- Filter and search tasks by status, priority, due date, or keyword
- Persistent storage using JSON files
- Clean, modular, and well-documented code using OOP best practices
- Robust error handling and input validation

## Technologies Used

- JavaScript (Node.js)
- Inquirer.js (CLI interaction)
- uuid (unique task IDs)
- File System (fs)
- ESLint


## Directory Structure

```
task-manager-cli/
├── classes/
│   ├── Task.js
│   └── TaskManager.js
├── data/
│   └── tasks.json
├── utils/
│   └── helpers.js
├── index.js
├── package.json
└── README.md
```

## Setup & Running Instructions

### Prerequisites

- Node.js (v14 or higher)
- Git (for version control)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/task-manager-cli.git
   cd task-manager-cli
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Run the application:
   ```
   node index.js
   ```

## Usage

- **Add a new task**: Enter title, description, due date, and priority.
- **View all tasks**: See a list of all tasks.
- **Update a task**: Modify any property or mark as complete.
- **Delete a task**: Remove a task permanently.
- **Filter tasks**: Filter by status, priority, or due date.
- **Search tasks**: Search by keyword in title or description.

## Data Schema (tasks.json)

Each task is stored as an object:

```
{
  "id": "uuid",
  "title": "Finish Assignment",
  "description": "Complete the CLI app",
  "dueDate": "2025-08-01",
  "priority": "High",
  "status": "Pending",
  "createdAt": "2025-07-21T10:00:00Z"
}
```

## System Architecture

- **Task Class**: Encapsulates task properties and methods.
- **TaskManager Class**: Handles CRUD operations and file persistence.
- **Helpers**: Utility functions for validation, formatting, and filtering.
- **CLI (index.js)**: User interface using Inquirer.js.

## License

MIT
