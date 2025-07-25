# Task Manager CLI Application

This is a command-line based Task Manager application built using **Node.js**, applying **Object-Oriented Programming (OOP)** principles. The project uses **MongoDB** for persistent storage, **Inquirer.js** for user interaction, and follows software development best practices such as modular code structure, clean coding conventions, and effective team collaboration.

The goal of this project was to provide a simple yet functional system where users can manage tasks directly from the terminal. Users can add, view, update, delete, and search/filter tasks based on various parameters such as status, priority, and due date.

## Project Overview

The application was developed as part of a group project assignment with a strong emphasis on collaborative development, software design patterns, and full-stack architecture. We focused on building a reliable backend that demonstrates OOP concepts such as encapsulation, abstraction, and modular class design.

The system maintains a clean command-line interface and stores tasks persistently using MongoDB, ensuring data is saved between sessions.

## Features

- Add new tasks with title, description, due date, status, and priority.
- View all existing tasks in a user-friendly format.
- Update task attributes (e.g., status or due date).
- Delete tasks by ID.
- Filter and search tasks by status, priority, or due date.
- Persistent storage via MongoDB to maintain data.
- Clean and modular code following Object-Oriented Programming principles.
- Simple and intuitive command-line interface using Inquirer.js.
- Code formatting using Prettier and ESLint for consistency.
- Unit testing using Jest for reliability.

## Technologies Used

- **Node.js** – Server-side runtime environment for building the CLI logic.
- **JavaScript (ES6+)** – Main programming language using modern syntax.
- **MongoDB** – NoSQL database used for storing tasks persistently.
- **Mongoose** – ODM (Object Data Modeling) tool for MongoDB integration.
- **Inquirer.js** – Library to prompt users and capture inputs in the terminal.
- **Prettier** – Used to maintain consistent code formatting.
- **ESLint** – Ensures JavaScript code quality and syntax checks.
- **Jest** – Testing framework used to verify the application’s behavior.

## Application Structure

The application is structured to be modular, readable, and scalable. All business logic is encapsulated in classes, and responsibilities are separated across files.

```

task\_management\_group\_8/
│
├── classes/
│   ├── Task.js              # Task class: defines task attributes and structure
│   └── TaskManager.js       # TaskManager class: methods for CRUD operations
│
├── utils/
│   └── helpers.js           # Placeholder for utility functions (if needed)
│
├── index.js                 # Entry point; integrates CLI and core functionality
│
├── Group 8 Project Proposal.docx
├── Group 8 Software Documentation.docx
├── Group 8 Contribution Report.docx
├── Link to Video Recording.docx
├── README.md
├── package.json             # Project configuration and dependencies
├── .eslintrc.json           # ESLint configuration
├── .prettierrc              # Prettier configuration

````

## Setup Instructions

To set up and run this application on your local machine, follow the steps below:

1. **Clone the Repository**

   Open your terminal and clone the repository using Git:
   ```bash
   git clone https://github.com/Daniel-IRYIVUZE/task_management_group_8.git
   cd task_management_group_8
````

2. **Install Project Dependencies**

   Use npm to install all required packages:

   ```bash
   npm install
   ```

3. **Set Up MongoDB**

   Ensure that MongoDB is installed and running locally or provide your connection string in the environment file (if implemented).
   The application connects to a MongoDB database named `task_manager`.

4. **Run the Application**

   Start the application using:

   ```bash
   npm start
   ```

   You will be presented with interactive CLI prompts to manage your tasks.

## Usage Instructions

* Once the application starts, follow the terminal prompts to perform operations:

  * Add a new task by entering title, description, due date, priority, and status.
  * View all tasks with their detailed information.
  * Update or delete tasks based on their ID.
  * Filter tasks based on different criteria.
* All data is saved and retrieved from MongoDB.

## Team Contributions

This project was completed by **Group 8**. Below are individual contributions from each team member:

### 1. Yusuf Molumo

Handled the backend integration with MongoDB to implement persistent storage. Led the implementation of error handling and input validation. Developed the command-line interface using Inquirer.js. Contributed to the `README.md`, added code formatting using Prettier, and supported unit testing using Jest.

### 2. Daniel Iryivuze – Project Lead & OOP Architect

Led the overall project development and architecture planning. Designed the Use Case Diagram to define system-user interactions and the application's flow. Implemented the `Task.js` and `TaskManager.js` files, defining the core task structure and all CRUD operations using OOP principles to ensure modularity and maintainability. Also guided version control and team coordination.

### 3. Latjor Wuon Lat Dak

Assisted in designing the CLI structure and prompt flow using Inquirer.js. Provided documentation support, especially the `README.md`. Participated in usability testing, ensuring a smooth user experience, and reviewed application flow for accessibility.

### 4. Nickitta Umuganwa Asimwe

Contributed to writing and reviewing documentation including the setup guide and general `README.md` content. Participated in testing by manually running the CLI and identifying edge cases. Assisted in creating the UML Class Diagram and ensured documentation adhered to proper academic standards.

## Supporting Documents

The following documents are included in the root folder of the repository:

* [Group 8 Project Proposal](https://docs.google.com/document/d/1aVzYEF8ShiFePPJSqGLkvBRrXPAUZyj3Hx4tp_RzazI/edit?usp=sharing)
* [Group 8 Software Documentation](https://docs.google.com/document/d/1hTU7aSsgEm3_f3PBivsmbMhMGZ7M8F02XDw2g3uYdxo/edit?usp=sharing)
* [Group 8 Contribution Report][(https://docs.google.com/document/d/1E7o8dVvuCMgT7Gp-d0D5fEeCCn1-Dy7qn83j8qtRTjE/edit?usp=sharing)

## Video Walkthrough

A complete demo video is linked in the following file:

* [Video Recording Link](https://drive.google.com/file/d/1i52jfrwlP1Nttt__pCoaNZWSfOaFHuiA/view?usp=sharing)

---
