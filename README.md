# Todo List App

This is a Todo List application built with **React** for the frontend and **Node.js** with **Express** for the backend. The app allows users to create, view, update, and delete tasks. It is connected to a MongoDB database for data persistence.

---

## Technologies Used

- **Frontend**: 
  - React
  - Tailwind CSS (for styling)
  - Axios (for API requests)
  - React Router (for navigation)

- **Backend**: 
  - Node.js
  - Express.js
  - MongoDB (for database storage)
  - Axios (for making HTTP requests)
  - dotenv (for environment variable management)

---

## Features

- **Add a Task**: Create new tasks with a title, description, due date, and status.
- **View Tasks**: View a list of tasks with details.
- **Delete a Task**: Remove tasks from the list.
- **Update a Task**: Edit task details like title, description, due date, and status.
- **Task Details**: View detailed information of a selected task.
- **Filter Tasks (Work in Progress)**: The feature to filter tasks based on specific criteria like status or due date is under development.

---

## Prerequisites

Before you begin, ensure that you have the following installed on your local machine:

- **Node.js** (version 14 or higher)  
  [Download Node.js](https://nodejs.org/)
  
- **MongoDB**: You can use a local instance of MongoDB, or you can use **MongoDB Atlas** (cloud MongoDB service). If you're using a local instance, ensure MongoDB is running.

---

## Installation Steps

### Clone the Repository

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/todo-list-app.git
   cd todo-list-app


**Backend setup**

cd server

npm install

MONGO_URL=mongodb://your-mongo-db-connection-string
PORT=5000

npm start

**Front end setup**

cd to-do-list

npm install

npm run dev

