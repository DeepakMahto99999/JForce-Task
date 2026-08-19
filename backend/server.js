import dotenv from 'dotenv'

import app from './src/app.js'
import connectToDB from './src/config/db.js';

dotenv.config();

const PORT = process.env.PORT || 5000; 

connectToDB();

app.listen(PORT , ()=>{
    console.log(`Server is running in port http://localhost:${PORT}`)
})