let dotenv = require('dotenv')
dotenv.config()
let app = require('./src/app')
const connectDB = require('./src/config/db')

let PORT = process.env.PORT || 4000

connectDB()

app.listen(PORT,()=>{
    console.log(`server is runnng on port ${PORT}`);
    
})