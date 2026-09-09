import type { Request, Response } from "express"
import { createCatService } from "../services/cat.service.ts"

 export const createCatController = async (req:Request , res:Response)=>{
    let result = await createCatService(req.body);

    return res.status(201).json({
        success: true,
        message: "cat created",
        data : result
    })
}