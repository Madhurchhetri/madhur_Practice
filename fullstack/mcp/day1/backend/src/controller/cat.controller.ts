import type { Request, Response } from "express"
import { createCatService, getAllCatsService, getSingleCatService, recommendCatsService, searchCatsService } from "../services/cat.service.ts"

 export const createCatController = async (req:Request , res:Response)=>{
    let result = await createCatService(req.body);

    return res.status(201).json({
        success: true,
        message: "cat created",
        data : result
    })
}

export const getAllCatsController = async (req:Request , res:Response)=>{
    let result = await getAllCatsService();

    return res.status(200).json({
        success: true,
        message: "cats fetched",
        data : result
    })
}

export const getSingleCatController = async (req:Request , res:Response)=>{
    let id = req.params.id as string
    let result = await getSingleCatService(id);

    return res.status(200).json({
        success: true,
        message: "single cat fetched",
        data : result
    })
}

export const searchCatsController = async (req:Request , res:Response)=>{

    let q = req.query.q as string;

    let result = await searchCatsService(q);

    return res.status(200).json({
        success: true,
        message: "search cat",
        data : result
    })
}

export const recommendController = async (req:Request , res:Response)=>{

   let{kidsFriendly,apartmentFriendly} = req.body;

    let result = await recommendCatsService(kidsFriendly,apartmentFriendly);

    return res.status(200).json({
        success: true,
        message: "recommend cat fetched",
        data : result
    })
}