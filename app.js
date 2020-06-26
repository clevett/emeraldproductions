const express = require('express'), cors = require('cors'), mongoose = require('mongoose')

require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

//MONGO ATLAS
const uri = process.env.ATLAS_URI
mongoose.connect(uri, { 
    useNewUrlParser: true, useUnifiedTopology: true 
})

const connection = mongoose.connection
connection.once('open', () => console.log("MongoDB database connection established successfully"))

//ROUTES
const usersRouter = require('./routes/users')
const sodlbestiaryRouter = require('./routes/sodlbestiary')
const roll20charsheetsRouter = require('./routes/roll20charsheets')
const send = require('./routes/send')

app.use('/users', usersRouter);
app.use('/api/ShadowoftheDemonLord', sodlbestiaryRouter)
app.use('/api/Roll20CharSheets', roll20charsheetsRouter)
app.use('/api/send', send)

module.exports = app