require('dotenv').config()
const massive = require('massive')
const express = require('express')
const controller = require('./controller')

const app = express()

const {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log(err))

app.use(express.json())

app.get('/api/shelfie', controller.get)
app.post('/api/shelfie', controller.create)
app.put('/api/shelfie/:id', controller.update)
app.delete('/api/shelfie/:id', controller.delete)

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`)
})