let userModel = require('../models/user.model');
let bcrypt = require('bcrypt');
let {generateAccessToken,generateRefreshToken} = require('../utils/generateTokens');
let jwt = require('jsonwebtoken');

let registerService = async(data)=>{
    try{

        let {name,email,password} = data;

        if(!email || !password ) 
            throw new Error("Please fill all the fields");

    let isExisted = await userModel.findOne({email});

    if(isExisted) 
        throw new Error("User already exists with this email");

    // Continue with user registration logic

    let hashPass = bcrypt.hashSync(password,10);

    let newUser = await userModel.create({
        name,
        email,
        password:hashPass
    });

    let accessToken = generateAccessToken(newUser._id);
    let refreshToken = generateRefreshToken(newUser._id);

        newUser.refreshToken = refreshToken;
        await newUser.save();

    return {newUser,accessToken,refreshToken}

    }catch(error){
        throw new Error(error)
    }
}

let loginService = async(data)=>{
    try{

        let {email,password} = data;

        if(!email || !password ) return res.status(400).json({
        message : "Please fill all the fields"
    })

    let isExisted = await userModel.findOne({email});

    if(!isExisted) return res.status(409).json({
        message : "User does not exist with this email"
    })

    // Continue with user login logic

    let hashPass = await bcrypt.compare(password, isExisted.password);

    if(!hashPass) return res.status(401).json({
        message : "Invalid credentials"
    })

    let accessToken = generateAccessToken(isExisted._id);
    let refreshToken = generateRefreshToken(isExisted._id);

        isExisted.refreshToken = refreshToken;
        await isExisted.save();

    return {isExisted, accessToken, refreshToken}

    }catch(error){
        throw new Error(error)
    }
}

let getAccessTokenService = async(refreshToken)=>{
    let decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    if(!decoded) throw new Error("unathurized request")

        let user = await userModel.findById(decoded.id);

        if(refreshToken !== user.refreshToken) throw new Error("unathurized request")

            let accessToken = generateAccessToken(user._id);

            return accessToken;

}

module.exports = {registerService , loginService , getAccessTokenService}