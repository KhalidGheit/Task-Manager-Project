const express = require('express');
const app = express()
const port = 3000

app.get('/',(req, res) =>{
    res.status(200).send(`<h1>task manager app</h1>`)
})

app.all('*', (req,res) => {
    res.status(404).send(`<h1> Error 404 Not found</h1> <a href = '/'>Back home page</a>`);
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`
    )
})
