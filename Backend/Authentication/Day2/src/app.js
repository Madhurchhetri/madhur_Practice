let cookieParser = require('cookie-parser');
let express = require('express')
let authRoutes = require('./routes/auth.routes')
 
let app = express();

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Server is working');
});

app.use('/api/auth', authRoutes)

module.exports = app;