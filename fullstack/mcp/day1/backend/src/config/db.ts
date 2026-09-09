import mongoose from "mongoose";

 const connectDB = async ()=>{
    let MONGO_URI = process.env.MONGO_URI
    try {
        if (!MONGO_URI) {
      throw new Error("MONGO_URI is not defined");
      
    }
        await mongoose.connect(MONGO_URI)
        console.log("MongoDB connected");
    } catch (error) {
        console.log('error in mongo db ' , error);
        
    }
}

export default connectDB;