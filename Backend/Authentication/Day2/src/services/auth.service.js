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

    if(isExisted) {throw new Error("this email already isExisted")};
    

    let hasPass = bcrypt.hashSync( password , 10 );

    let newUser = await userModel.create({
        name, 
        email,
        password :hasPass
    })

    let accessToken = generateAccessToken(newUser._id);
    let refreshToken = generateRefreshToken(newUser._id);

        newUser.refreshToken = refreshToken;
        await newUser.save();

    return {
        accessToken , refreshToken , newUser
    }

    } catch (error) {
        throw new Error("error", error);
        
    }
}

let loginService = async (data) => {
    try {
        let { email, password } = data;

        if (!email || !password) {
            throw new Error("All fields are required");
        }

        let isExisted = await userModel.findOne({ email });

        if (!isExisted) {
            throw new Error("User not found");
        }

        let hasPass = bcrypt.compareSync(password, isExisted.password);

        if (!hasPass) {
            throw new Error("Invalid credentials");
        }

        let accessToken = generateAccessToken(isExisted._id);
        let refreshToken = generateRefreshToken(isExisted._id);

        isExisted.refreshToken = refreshToken;
        await isExisted.save();

        return {
            accessToken,
            refreshToken,
            isExisted
        };

    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports = {registerService,loginService }