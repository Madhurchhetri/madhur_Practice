import dotenv from 'dotenv';
dotenv.config();
import app from "./app.ts";
import connectDB from './config/db.ts';


let PORT = process.env.PORT

connectDB();

app.listen(3000,()=>{
    console.log(`server is running on port ${PORT}`);
    
})