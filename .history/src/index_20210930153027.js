const express = require('express')
const morgan = require('morgan')
const handlebars = require('handlebars')
const app = express()
const port = 3000

app.use(morgan('combined'))

//template engine
app.engine('handlebars', handlebars())

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})