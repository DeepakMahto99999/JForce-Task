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


## userModel 

1. `models/user.model.js` 
- Created User schema using Mongoose.
- Added email validation using Regex.
- Password is hashed using `bcryptjs` before saving.
- Used `select: false` to hide password from query results.
- Created `comparePassword()` method to verify user passwords.
- Used `pre("save")` middleware to hash passwords automatically.

2. `models/expense.model.js`
- Created expense Schema this seperate model for tracking user expense .



## implement register , logout and login api 
make register , logout and login api 
### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login an existing user |
| post | `/api/auth/logout` | Logout an existing user | 





##  `src/middleware`
- Protects routes using JWT authentication.
- Allows access only to authenticated users.
- Verifies the JWT token and attaches the authenticated user to `req.user`. 


## create expenses api 
POST | `api/expenses/create 

create api of expenses data save in db 