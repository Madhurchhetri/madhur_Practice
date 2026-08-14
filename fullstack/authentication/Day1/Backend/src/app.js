let express = require('express')
let cookieParser = require('cookie-parser')
let authRoutes = require('./routes/auth.route')
let homeRoutes = require('.//routes/home.route')

let app = express()

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth' , authRoutes)
app.use('/api/home', homeRoutes)

module.exports = app