let mongoose = require('mongoose');
let connectDB = async () => {
    try {
            await mongoose.connect(process.env.MONGO_URI)
            console.log('database connected successfully')
            console.log("Connected DB:", mongoose.connection.name);
    } catch (error) {
        console.error('error in connecting to database', error)
    }
}

module.exports = connectDB;