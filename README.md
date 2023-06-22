# MERN Stack Application README

This is a MERN (MongoDB, Express, React, Node.js) stack application with features including backend APIs for CRUD operations, authentication using bcrypt and JWT, and protected routing on both the frontend and backend.

## Prerequisites

Before running the application, ensure you have the following prerequisites installed:

- Node.js (version v18.16.0)\

## Getting Started

To get the application up and running, follow these steps:

### Clone the repository

   ```bash
   git clone https://github.com/arvind-iyer-2001/MERN-Auth-Tutorial
   ```

### Backend

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file based on the provided `.env.example` file and set the necessary environment variables.

4. Start the backend server:

   ```bash
   npm run start
   ```

   OR

   ```bash
   npm run dev
   ```

   The backend server will run on `http://localhost:8080` by default.

### Client

1. Navigate to the client directory:

   ```bash
   cd client
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the client development server:

   ```bash
   npm start
   ```

   The client development server will run on `http://localhost:3000`.

## Features

### Basic MERN Application with Backend APIs

This application provides backend APIs for performing CRUD operations on a database collection named "workouts". You can use these APIs to create, read, update, and delete workouts in the database.

The backend is built using the following technologies and libraries:

- MongoDB: Database system
- Express: Web application framework for Node.js
- Node.js: JavaScript runtime environment
- JWT: JSON Web Tokens for authentication
- bcrypt: Password hashing
- Mongoose: MongoDB object modeling for Node.js (ORM)
- Cors: Cross-origin resource sharing
- Validator: Data validation library
- Dotenv: Environment variable management

### Authentication with bcrypt and JWT

The application implements user authentication using bcrypt for password hashing and JWT (JSON Web Tokens) for generating and verifying tokens. This allows users to securely authenticate and access protected resources.

### Protected Routing

The application utilizes protected routing on both the frontend and backend. Only authenticated users with valid JWT tokens can access protected routes and perform CRUD operations on the "workouts" collection.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your forked repository.
5. Submit a pull request detailing your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or need assistance, please contact:

- Your Name: `arvind.iyer.2001@gmail.com`
- Project Link: `https://github.com/arvind-iyer-2001/MERN-Auth-Tutorial`

Feel free to reach out with any feedback or suggestions as well.

Happy coding!!!