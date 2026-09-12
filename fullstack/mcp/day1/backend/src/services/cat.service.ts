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

// search cats service

export const searchCatsService = async (query: string)=>{
    return await catModel.find({
        $or:[
            {
                name:{
                    $regex: query,
                    $options: "i"
                }
            },
            {
                breed:{
                    $regex: query,
                    $options: "i"
                }
            }
        ]
    });
}

export const recommendCatsService = async (kidsFriendly: boolean , apartmentFriendly: boolean)=>{
    return await catModel.find({
        kidsFriendly,
        apartmentFriendly 
    });
}