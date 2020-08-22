const express = require('express'), cors = require('cors'), mongoose = require('mongoose')
const path = require('path')

require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

//MONGO ATLAS
const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

const connection = mongoose.connection
connection.once('open', () => console.log("MongoDB database connection established successfully"))

//ROUTES
const usersRouter = require('./routes/users')
//SODL
const sodlbestiaryRouter = require('./routes/sodl/bestiary')
//Shadowrun
const shadowrunMissionCreationRouter = require('./routes/shadowrun/missioncreation')
//Roll20
const roll20charsheetsRouter = require('./routes/roll20/charsheets')
//Contact form

const send = require('./routes/send')

//SODL
app.use('/api/ShadowoftheDemonLord', sodlbestiaryRouter)
//Shadowrun
app.use('/api/ShadowrunMissionCreation', shadowrunMissionCreationRouter)
//Roll20
app.use('/api/Roll20CharSheets', roll20charsheetsRouter)
//Contact form
app.use('/api/send', send)

//Server static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    //Set the static folder
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
} else {
    app.use(express.static('client/build'))
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))