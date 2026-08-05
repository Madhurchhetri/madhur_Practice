let {registerService , loginService} = require('../services/auth.service');

let registerController = async(req,res)=>{

    let {newUser,accessToken,refreshToken} = await registerService(req.body);

    res.cookie('accessToken',accessToken,{
        htttpOnly:true,
        sameSite:'lax',
        secure:false,
        maxAge:1000*60*60
    })

    res.cookie('refreshToken',refreshToken,{
        htttpOnly:true,
        sameSite:'lax',
        secure:false,
        maxAge:1000*60*60
    })

    return res.status(201).json({
        message : "User registered successfully",
        user : newUser
    })
}

let loginController = async(req,res)=>{

    let{isExisted,accessToken,refreshToken} = await loginService(req.body)

    res.cookie('accessToken',accessToken,{
        htttpOnly:true,
        sameSite:'lax',
        secure:false,
        maxAge:1000*60*60
    })

    res.cookie('refreshToken',refreshToken,{
        htttpOnly:true,
        sameSite:'lax',
        secure:false,
        maxAge:1000*60*60
    })

    return res.status(201).json({
        message : "User logged in successfully",
        user : isExisted
    })
}

module.exports = {registerController,loginController}