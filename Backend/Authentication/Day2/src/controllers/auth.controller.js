
const { registerService } = require('../services/auth.service');

let registerController = async (req, res)=>{
    
    let {acessToken , refreshToken , newUser}  = await registerService(req.body)

    res.cookie('accessToken' , acessToken,{
        httpOnly: true,
        sameSite : "lax",
        secure : false,
        maxAge : 24 * 60 * 60 * 1000,
    })
    res.cookie('refreshToken' , refreshToken,{
        httpOnly: true,
        sameSite : "lax",
        secure : false,
        maxAge : 7 * 24 * 60 * 60 * 1000,
    })

    return res.status(200).json({
        message: "register successfully",
        user : newUser
    })
}

let loginController = async ()=>{
    
}

module.exports = {registerController,loginController}