import express from 'express'
import cookieParser from 'cookie-parser'
import authRouter from './routes/auth.routes.js';
const app = express();


app.use(express.json())
app.use(cookieParser())

app.get("/", async (req, res) => {
    res.send("server is running")
})

app.use("/api/auth", authRouter);



export default app
