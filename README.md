# Project Setup and Run Instructions

This guide explains how to set up and run the project. Follow the steps carefully to ensure everything works correctly.

## Prerequisites
Before running the project, ensure you have the following:
1. Node.js and npm installed on your machine.
2. .NET SDK installed.
3. Docker installed if you plan to use Docker.

## Initial Setup
### Frontend
1. Navigate to the `www` folder.
2. Copy `.env.example` to `.env.local` and ensure the configurations match your environment.

### Backend
1. Open the `server/appsettings.json` file.
2. Ensure the `ConnectionString` property matches your database setup (SQL Server).

## Running the Application
### Using Terminal
#### Backend
1. Navigate to the `server` folder:
   ```bash
   cd server
   ```
2. Run the following command to start the backend:
   ```bash
   dotnet restore

   dotnet run
   ```

#### Frontend
1. Navigate to the `www` folder:
   ```bash
   cd www
   ```
2. Run the following command to start the frontend:
   ```bash
   npm install

   npm start
   ```

### Using Docker
1. Navigate to the root directory of the project.
2. Run the following command to build and start the containers:
   ```bash
   docker compose up --build
   ```

## Notes
- Ensure your database is running and accessible if you’re not using Docker.
- Check for any additional dependencies or configurations specific to your environment.
- If you encounter any issues, refer to the project’s documentation or contact the development team.

