### Current Features

- Express server initialized
- Modular application structure


##  Backend Structure

- `server.js` – Starts the Express server.
- `src/app.js` – Configures the Express   application and middleware.
- `.env` – Stores environment variables such as the server port, database connection string, and JWT secret securely.  


## Database connection 

1. Created `config/db.js` and used Mongoose to connect the application to MongoDB Atlas.

2. Stored the MongoDB connection string in the .env file as MONGO_URI instead of writing it directly in the code, which helps keep sensitive database credentials secure.