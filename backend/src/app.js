import express from 'express'

const app = express();


app.use(express.json())

app.get("/", async (req, res) => {
    res.send("server is running")
})

export default app
