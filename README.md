To-Do List - Backend
This is the backend API for the To-Do List application. It allows users to create, update, view, and delete tasks.

Table of Contents
Technologies Used
Installation
API Endpoints
Setup Environment Variables
Running the Server
Notes
Technologies Used
Node.js: JavaScript runtime for the server.
Express.js: Web framework for building the REST API.
MongoDB: NoSQL database to store tasks.
Mongoose: MongoDB object modeling tool for Node.js.
dotenv: Loads environment variables from a .env file.
Cors: For enabling Cross-Origin Request Sharing.
body-parser: Middleware to handle incoming request bodies.
Installation
1. Clone the Repository
First, clone the repository to your local machine:

bash
Copy code
git clone https://github.com/your-username/your-repo-name.git
2. Install Dependencies
Navigate to the server directory and install the required dependencies:

bash
Copy code
cd server
npm install
3. Set Up Environment Variables
Create a .env file in the server directory to store sensitive information such as your database connection string and the server port.

Example .env file:

env
Copy code
PORT=8000
MONGO_URI=mongodb://your-username:your-password@cluster-url:port/database-name
Make sure to replace the MONGO_URI with your actual MongoDB connection URL.

4. Run the Server
To start the backend server, run:

bash
Copy code
npm start
This will start the server on the port defined in your .env file (default 8000).
