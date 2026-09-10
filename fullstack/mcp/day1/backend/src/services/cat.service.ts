import catModel from "../models/cat.model.ts"


//create service

export const createCatService = async (payload:object)=>{
    return await catModel.create(payload)
}

//get all cats service

export const getAllCatsService = async ()=>{
    return await catModel.find();
}

//getSingleCatService service

export const getSingleCatService = async (id: string)=>{
    return await catModel.findById(id);
}