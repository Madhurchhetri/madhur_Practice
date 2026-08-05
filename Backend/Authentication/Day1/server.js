let dotenv = require('dotenv')
dotenv.config()
let app = require('./src/app');
const connectDB = require('./src/config/db');

connectDB();

let PORT = process.env.PORT || 4000;


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})