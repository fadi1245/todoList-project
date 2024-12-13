# To-Do List - Backend

This is the backend API for the **To-Do List** application. It allows users to create, update, view, and delete tasks.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Implementation](#Implemetation)


## Technologies Used

- **Node.js**: JavaScript runtime for the server.
- **Express.js**: Web framework for building the REST API.
- **MongoDB**: NoSQL database to store tasks.
- **Mongoose**: MongoDB object modeling tool for Node.js.
- **dotenv**: Loads environment variables from a `.env` file.
- **Cors**: For enabling Cross-Origin Request Sharing.
- **body-parser**: Middleware to handle incoming request bodies.

## Implementation

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/your-repo-name.git

##Install Dependencies
cd server
npm install

##Set Up Environment Variables
PORT=8000
MONGO_URI=mongodb://your-username:your-password@cluster-url:port/database-name

##Run the Server
npm start


