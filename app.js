const express = require('express');
const app = express()
const port = 3000
const connectDB = require('./DB/connection');
require('dotenv').config()
const tasks = require('./routes/tasks')
app.use(express.json());
app.use('/api/v1/tasks', tasks)
app.use(express.static('./public'))
const start = async () => {
try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {console.log(`Server is listening on port ${port}...`)})
} catch (error) {
    console.log(error)
}
}
start()
