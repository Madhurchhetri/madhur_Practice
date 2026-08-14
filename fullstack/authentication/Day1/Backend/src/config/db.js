const { default: mongoose } = require("mongoose")

let connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('connect to the mongo db');
        
    } catch (error) {
        console.error('mongo db connection error')
    }
}

module.exports = connectDB