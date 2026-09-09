import express, { type Request, type Response } from 'express';
import catRoutes from './routes/cat.routes.ts'

const app = express();

app.use(express.json())

app.get("/",(req:Request , res:Response)=>{
    res.send({
        success:true,
        message:"tiny cats backend running..",
    })
})

app.use("/api/cats" , catRoutes)

export default app;