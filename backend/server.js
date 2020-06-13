const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

const connection = mongoose.connection
connection.once('open', () => console.log("MongoDB database connection established successfully"))

const usersRouter = require('./routes/users')
const sodlbestiaryRouter = require('./routes/sodlbestiary')
const roll20charsheetsRouter = require('./routes/roll20charsheets')
const send = require('./routes/send')

app.use('/users', usersRouter);
app.use('/ShadowoftheDemonLord', sodlbestiaryRouter)
app.use('/Roll20', roll20charsheetsRouter)
app.use('/send', send)

if (process.env.NODE_ENV === 'production') {
    
}

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))