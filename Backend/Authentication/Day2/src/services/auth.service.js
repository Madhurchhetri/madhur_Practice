let userModel = require('../models/user.model');
let bcrypt = require('bcrypt');
const { generateAccessToken, generateRefreshToken } = require('../utils/generateToken');

let registerService = async (data)=>{
    try {
        let {name ,email ,password} = data
        if(!email || !password) return res.status(400).json({
        message : "all fields are required "
    })

    let isExisted = await userModel.findOne({
        email,
    })

    if(isExisted) return res.status(401).json({
        message : "this email already exist"
    })

    let hasPass = bcrypt.hashSync( password , 10 );

    let newUser = await userModel.create({
        name, 
        email,
        password :hasPass
    })

    let acessToken = generateAccessToken(newUser._id);
    let refreshToken = generateRefreshToken(newUser._id);

    return {
        acessToken , refreshToken , newUser
    }

    } catch (error) {
        throw new Error("error", error);
        
    }
}

module.exports = {registerService}