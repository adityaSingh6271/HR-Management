HR Management System
A comprehensive Full-Stack HR Management System designed to streamline HR processes such as managing employees, candidates, and leaves. This web application includes features like user authentication, CRUD operations, data filtering, and search functionality.

Features
User Authentication:

Registration, Login, and Logout functionality using JWT for secure access.
Role Management:

Manage Employees, Candidates, and Leaves through a structured component layout.
CRUD Operations:

Add, Edit, View, and Delete Employees and Candidates.
Data Management:

Filter and search through data for better visibility and efficiency.
Component-Based Structure:

A sidebar for easy navigation between different sections.
A main content area with subcomponents for specific functionalities.
Tech Stack
Frontend:

React.js
Vanilla CSS for styling.
Backend:

Node.js
Express.js
Database:

MongoDB
Installation and Setup
Prerequisites
Before you start, ensure you have the following installed on your local machine:

Node.js
MongoDB (Local or Cloud instance)
Steps to Run the Application
Clone the Repository:

bash
Copy code
git clone https://github.com/adityaSingh6271/HR-Management.git
cd HR-Management
Install Backend Dependencies: Navigate to the backend directory and run:

bash
Copy code
npm install
Install Frontend Dependencies: Navigate to the frontend directory and run:

bash
Copy code
npm install
Environment Configuration:
Create a .env file in the root directory and add the following variables:

env
Copy code
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
Run the Application:

Start the Backend:
Navigate to the backend directory and run:

bash
Copy code
nodemon server.js
Start the Frontend:
Navigate to the frontend directory and run:

bash
Copy code
npm start