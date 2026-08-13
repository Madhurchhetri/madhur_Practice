let jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');

let authMiddleware = async(req,res,next)=>{
    try {
        let accessToken = req.cookies.accessToken;
        if(!accessToken) return res.status(401).json({
            message :"unAuthorized request"
        });

        let decoded = jwt.verify(accessToken , process.env.JWT_ACCESS_SECRET)

        if(!decoded) return res.status(401).json({
            message :"unAuthorized request"
        });

        let user = await userModel.findById(decoded.id);

        req.user = user;
        next();

    } catch (error) {
         console.log(error);
        throw error;
        
    }
}

module.exports = authMiddleware 