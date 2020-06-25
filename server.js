const app = require('./app')
const path = require('path')

//Server static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    //Set the static folder
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))