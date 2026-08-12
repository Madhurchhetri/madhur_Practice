const cookieParser = require('cookie-parser');
const express = require('express')
let authRoutes = require('./routes/auth.routes')

let app = express();

app.use(express.json);
app.use(cookieParser);
app.use('/api/auth', authRoutes)

module.exports = app;