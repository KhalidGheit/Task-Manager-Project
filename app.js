const connectDB = require('./DB/connection');

require('dotenv').config()

const express = require('express');
const app = express()
const port = 3000
const tasks = require('./routes/tasks')

app.use(express.json());

app.get('/home',(req, res) =>{
    res.status(200).send(`<h1>task manager app</h1>`)
})

app.use('/api/v1/tasks', tasks)

app.all('*', (req,res) => {
    res.status(404).send(`<h1> Error 404 Not found</h1> <a href = '/'>Back home page</a>`);
})
const start = async () => {
try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {console.log(`Server is listening on port ${port}...`)})
} catch (error) {
    console.log(error)
}
}
start()