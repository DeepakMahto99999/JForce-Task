import express from 'express'
import cookieParser from 'cookie-parser'
import authRouter from './routes/auth.routes.js';
import expenseRouter from './routes/expense.routes.js';
const app = express();


app.use(express.json())
app.use(cookieParser())

app.get("/", async (req, res) => {
    res.send("server is running")
})

app.use("/api/auth", authRouter);

app.use("/api/expenses", expenseRouter);



export default app
