# My Awesome MEVN Project

A full-stack application built with MongoDB, Express.js, Vue.js, and Node.js. This guide will help you get a local copy up and running for development and testing purposes.



## Prerequisites

Before you begin, ensure you have the following installed on your system:
* **Node.js** (v18 or later recommended)
* **npm** (comes with Node.js)
* **Git**
* A running **MongoDB** instance. The easiest way to get started is with a free cluster from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

---
## Getting Started

Follow these steps to set up the project locally.

### 1. Clone the Repository
First, clone the project from GitHub to your local machine.
```bash
git clone [https://github.com/your-username/my-mevn-app.git](https://github.com/your-username/my-mevn-app.git)
cd my-mevn-app
```

### 2. Install Dependencies
This project is a monorepo with separate dependencies for the backend server and the frontend client. You'll need to install them in both directories.

* **Install Backend Dependencies:**
    ```bash
    cd server
    npm install
    ```

* **Install Frontend Dependencies:**
    ```bash
    cd ../client 
    npm install
    ```

### 3. Set Up Environment Variables
The backend server requires a `.env` file to store sensitive information like your database connection string.

1.  Navigate to the `server` directory.
2.  Create a copy of the example environment file:
    ```bash
    cp .env.example .env
    ```
    *(If you don't have an `.env.example` file, simply create a new file named `.env`)*
3.  Open the newly created `.env` file and add your MongoDB connection string:
    ```
    MONGO_URI=mongodb+srv://<username>:<password>@yourcluster.mongodb.net/yourDatabaseName
    PORT=5000
    ```

---
## Running the Application

To run the full application, you will need to start both the backend and frontend servers. It's best to use **two separate terminal windows** for this.

### Terminal 1: Run the Backend Server
```bash
cd server
npm start
```
Your backend API should now be running on `http://localhost:5000`.

### Terminal 2: Run the Frontend Client
```bash
cd client
npm run serve
```
Your Vue.js frontend should now be running and accessible at `http://localhost:8080`.

---
## How to Contribute

We welcome contributions! Please follow these steps to contribute:

1.  **Fork** the repository.
2.  Create a new branch for your feature: `git checkout -b feature/your-amazing-feature`.
3.  Make your changes and commit them with a descriptive message.
4.  Push your changes to your fork: `git push origin feature/your-amazing-feature`.
5.  Open a **Pull Request** to the `main` branch of this repository.