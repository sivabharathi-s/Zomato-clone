# Node.js Authentication App

This project is a simple Node.js application that manages user authentication using MongoDB. It provides functionality for signing in and logging in users.

## Project Structure

```
nodejs-auth-app
├── src
│   ├── controllers
│   │   ├── authController.js
│   ├── models
│   │   └── userModel.js
│   ├── routes
│   │   └── authRoutes.js
│   ├── app.js
│   └── config
│       └── db.js
├── package.json
├── .env
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd nodejs-auth-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=mongodb://<username>:<password>@localhost:27017/zomato
   ```

## Usage

1. Start the application:
   ```
   npm start
   ```

2. The server will run on `http://localhost:3000`.

## API Endpoints

- **POST /api/auth/signin**: Sign in a user.
- **POST /api/auth/login**: Log in a user.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.