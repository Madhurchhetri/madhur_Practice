import catModel from "../models/cat.model.ts"

export const createCatService = async (payload:object)=>{
    return await catModel.create(payload)
}