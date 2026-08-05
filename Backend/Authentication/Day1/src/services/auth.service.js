let userModel = require('../models/user.model');
let bcrypt = require('bcrypt');
let {generateAccessToken,generateRefreshToken} = require('../utils/generateTokens');

let registerService = async(data)=>{
    try{

        let {name,email,password} = data;

        if(!email || !password ) return res.status(400).json({
        message : "Please fill all the fields"
    })

    let isExisted = await userModel.findOne({email});

    if(isExisted) return res.status(409).json({
        message : "User already exists with this email"
    })

    // Continue with user registration logic

    let hashPass = bcrypt.hashSync(password,10);

    let newUser = await userModel.create({
        name,
        email,
        password:hashPass
    });

    let accessToken = generateAccessToken(newUser._id);
    let refreshToken = generateRefreshToken(newUser._id);

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

    return {isExisted, accessToken, refreshToken}

    }catch(error){
        throw new Error(error)
    }
}

module.exports = {registerService , loginService}