let jwt = require('jsonwebtoken');
let userModel = require('../models/user.model');

let authMiddleware = async (req,res,next)=>{
    try{
        let accessToken = req.cookies.accessToken;
        if(!accessToken) return res.status(401).json({
            message : "unAthurized request"
        });

        let decoded = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);

        if(!decoded)return res.status(401).json({
            message : "unAthurized request"
        });

        let user = await userModel.findById(decoded.id);

        req.user = user;
        next();

    }catch(error){
        throw new Error(error)
    }
}

module.exports = authMiddleware;