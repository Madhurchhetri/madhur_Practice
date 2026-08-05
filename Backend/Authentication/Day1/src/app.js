let express = require('express');
let cookieParser = require('cookie-parser');
let authRoutes = require('./routes/auth.routes');

let app = express();
app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRoutes);

module.exports = app;