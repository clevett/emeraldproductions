const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { 
    useNewUrlParser: true, useUnifiedTopology: true 
})

const connection = mongoose.connection
connection.once('open', () => console.log("MongoDB database connection established successfully"))

const usersRouter = require('./backend/routes/users')
const sodlbestiaryRouter = require('./backend/routes/sodlbestiary')
const roll20charsheetsRouter = require('./backend/routes/roll20charsheets')
const send = require('./backend/routes/send')

app.use('/users', usersRouter);
app.use('/ShadowoftheDemonLord', sodlbestiaryRouter)
app.use('/Roll20', roll20charsheetsRouter)
app.use('/send', send)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('./build'))

    app.get('*', (req, res) => {
        res.sendFile(path.join(_dirname, 'build', 'index.html')) // relative path
    })
}

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))