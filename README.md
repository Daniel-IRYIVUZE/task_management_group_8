# Task Manager CLI

A command-line Task Manager using Node.js, OOP, and MongoDB for persistent storage.

## Features
- Add, view, update, and delete tasks
- Filter/search by status, priority, or due date
- Persistent storage with MongoDB
- Clean, modular OOP code
- User-friendly CLI (Inquirer.js)

## Technologies
- Node.js
- JavaScript (ES6+)
- MongoDB 
- Inquirer.js
- ESLint, Prettier, Jest

## Setup Instructions
1. **Clone the repository:**
   ```sh
   git clone https://github.com/Daniel-IRYIVUZE/task_management_group_8
   cd task-manager-cli
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up MongoDB:**
   - Ensure MongoDB is running locally at your MongoDB URI
   - The app will use a database named `task_manager`
4. **Run the application:**
   ```sh
   npm start
   ```

## Directory Structure
```
├── classes/
│   ├── Task.js
│   └── TaskManager.js
├── utils/
│   └── helpers.js
├── index.js
├── package.json
├── README.md
```

## Usage
- Follow CLI prompts to add, view, update, or delete tasks.
- Filter/search tasks by status, priority, or due date.

## License
MIT 