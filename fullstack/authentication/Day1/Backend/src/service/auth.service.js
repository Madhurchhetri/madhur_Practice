const userModel = require("../models/user.model");
let bcrypt = require('bcrypt');
const { generateAccessToken, generateRefreshToken } = require("../utils/generateToken");
let jwt = require('jsonwebtoken')

let registerService = async(data)=>{
    try{
        let{name,email,password} = data;

         if(!name || !email || !password) return res.status(404).json({
        message : "required all fields"
       }) 

       let isExisted = await userModel.findOne({email})
       if(isExisted) return res.status(409).json({
        message :"email already existed"
       })

       let hashPass = bcrypt.hashSync(password ,10)

       let newUser = await userModel.create({
        name,
        email,
        password:hashPass
       })

       let accessToken = generateAccessToken(newUser._id)
       let refreshToken = generateRefreshToken(newUser._id)

       newUser.refreshToken = refreshToken;
       await newUser.save();

       return {newUser,accessToken,refreshToken}

    }catch(error){
        throw new Error(error);
        
    }
}

let loginService = async(data)=>{
    try{
        let{email,password} = data;

         if(!email || !password) return res.status(404).json({
        message : "required all fields"
       }) 

       let isExisted = await userModel.findOne({email})
       if(!isExisted) return res.status(409).json({
        message :"user does not exist with this email"
       })

       let hashPass = bcrypt.compare(password , isExisted.password)

       if(!hashPass) return res.status(401).json({
        message: " Invalid credentials",
       })


       let accessToken = generateAccessToken(isExisted._id)
       let refreshToken = generateRefreshToken(isExisted._id)

       isExisted.refreshToken = refreshToken;
       await isExisted.save();

       return {isExisted,accessToken,refreshToken}

    }catch(error){
        throw new Error(error);
        
    }
}

let getAccessTokenService = async(refreshToken)=>{
    let decoded = jwt.verify(refreshToken , process.env.JWT_REFRESH_SECRET);

    if(!decoded) throw new Error("unathurised request");

    let user = await userModel.findById(decoded.id);

    if(refreshToken !== user.refreshToken) throw new Error("unathurised request");

    let accessToken = generateAccessToken(user._id);

    return accessToken;
    
}

module.exports = {
    registerService,
    loginService,
    getAccessTokenService
}