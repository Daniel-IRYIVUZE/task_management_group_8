# **Task Manager CLI Application**

This is a command-line based Task Manager application developed using **Node.js** and **MongoDB**, applying solid **Object-Oriented Programming (OOP)** principles. It allows users to manage tasks directly from the terminal through an intuitive interface powered by **Inquirer.js**. The project emphasizes clean, modular design and collaborative development best practices.

---

## **Project Overview**

The application was developed as a group assignment with a focus on software design, backend logic, and teamwork. It supports full CRUD operations—**Create**, **Read**, **Update**, and **Delete**—alongside search and filter capabilities. All task data is stored persistently using **MongoDB**, ensuring information is retained across sessions.

OOP principles such as **encapsulation**, **modularity**, and **abstraction** were at the core of the design, resulting in a maintainable and extensible codebase. Team members collaborated on feature development, testing, error handling, documentation, and project planning.

---

## **Key Features**

* Add new tasks with title, description, due date, status, and priority.
* View all existing tasks in a readable terminal format.
* Update task attributes such as status, description, or due date.
* Delete tasks by ID.
* Search and filter tasks by status, priority, or due date.
* Interactive CLI using **Inquirer.js**.
* Persistent data storage using **MongoDB**.
* Well-structured, OOP-based code (Task, TaskManager classes).
* Input validation and error handling.
* Code formatting with **Prettier** and **ESLint**.
* Unit testing with **Jest**.

---

## **Technologies Used**

| Technology        | Purpose                         |
| ----------------- | ------------------------------- |
| Node.js           | Backend runtime for CLI logic   |
| JavaScript (ES6+) | Core programming language       |
| MongoDB           | NoSQL database for task storage |
| Mongoose          | ODM to interface with MongoDB   |
| Inquirer.js       | CLI input prompts               |
| ESLint            | Code quality and linting        |
| Prettier          | Code formatting                 |
| Jest              | Unit testing framework          |

---

## **Project Structure**

```
task_management_group_8/
│
├── classes/
│   ├── Task.js              # Task class: task structure
│   └── TaskManager.js       # Handles CRUD operations
│
├── utils/
│   └── helpers.js           # Utility functions (if needed)
│
├── index.js                 # Main entry point
│
├── Group 8 Project Proposal.docx
├── Group 8 Software Documentation.docx
├── Group 8 Contribution Report.docx
├── Link to Video Recording.docx
│
├── package.json             # Project metadata and scripts
├── .eslintrc.json           # ESLint config
├── .prettierrc              # Prettier config
└── README.md
```

---

## **Setup Instructions**

### 1. Clone the Repository

```bash
git clone https://github.com/Daniel-IRYIVUZE/task_management_group_8.git
cd task_management_group_8
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up MongoDB

Ensure MongoDB is installed and running. Optionally set your own connection URI via environment variables.

* The app connects to a database named `task_manager`.

### 4. Run the Application

```bash
npm start
```

Follow the CLI prompts to add, update, delete, or view tasks.

---

## **Usage Guide**

Once launched:

* Add tasks by providing relevant details.
* View tasks listed with title, status, due date, and priority.
* Update existing tasks using their IDs.
* Delete tasks by selecting from the list.
* Filter or search based on task parameters.

All data is saved automatically in MongoDB.

---

## **Team Contributions**

This project was developed by **Group 8**. Below is a summary of each member's contributions:

### Yusuf Molumo

* Integrated MongoDB for persistent storage.
* Implemented error handling and input validation.
* Developed the CLI interface with Inquirer.js.
* Supported testing using **Jest** and formatting with **Prettier**.
* Contributed to the `README.md` and general bug fixing.

### Daniel Iryivuze (Project Lead & OOP Architect)

* Led system design and architectural planning.
* Created the Use Case Diagram and UML Class Diagram.
* Developed core logic in `Task.js` and `TaskManager.js` using OOP.
* Coordinated Git workflow and team communication.

### Latjor Wuon Lat Dak

* Designed user interaction flows with Inquirer.js.
* Reviewed terminal usability and accessibility.
* Contributed to writing and revising documentation.

### Nickitta Umuganwa Asimwe

* Wrote and edited documentation (README, setup guide).
* Reviewed final documentation for academic and technical clarity.
* Participated in manual testing and edge case identification.
* Contributed to UML Class Diagram creation.

---

## **Supporting Documents**

All supporting documentation is available in the repository root or online:

* [Group 8 Project Proposal](https://docs.google.com/document/d/1aVzYEF8ShiFePPJSqGLkvBRrXPAUZyj3Hx4tp_RzazI/edit?usp=sharing)
* [Group 8 Software Documentation](https://docs.google.com/document/d/1hTU7aSsgEm3_f3PBivsmbMhMGZ7M8F02XDw2g3uYdxo/edit?usp=sharing)
* [Group 8 Contribution Report](https://docs.google.com/document/d/1E7o8dVvuCMgT7Gp-d0D5fEeCCn1-Dy7qn83j8qtRTjE/edit?usp=sharing)

---

## **Video Demonstration**

Watch the full demo showing how to use the CLI application:

[Video Recording (Google Drive)](https://drive.google.com/file/d/1i52jfrwlP1Nttt__pCoaNZWSfOaFHuiA/view?usp=sharing)

---
