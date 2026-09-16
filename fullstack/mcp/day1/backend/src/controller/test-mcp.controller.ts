import type { Request, Response } from "express";
import { getMcpClient } from "../services/mcp.service.ts";

export const testMcpController = async(req:Request , res:Response)=>{

    const client = await getMcpClient();

    const tools = await client.listTools();

    const result = await client.callTool({
        name: "recommend_cats",
        arguments:{
            kidsFriendly: true,
            apartmentFriendly: false
        }
    })

    return res.json({
        success:true,
        result,
    })

}