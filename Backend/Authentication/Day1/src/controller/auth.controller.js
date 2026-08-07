let {registerService , loginService , getAccessTokenService} = require('../services/auth.service');

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

let getAccessTokenController = async(req,res)=>{
    let refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.status(401).json({
        message : "Unauthorized request"
    });
    let accessToken = await getAccessTokenService(refreshToken);

    res.cookie('accessToken',accessToken,{
        htttpOnly:true,
        sameSite:'lax',
        secure:false,
        maxAge:1000*60*60
    })

    return res.status(200).json({
        message : "Access token generated successfully",
    })
}
module.exports = {registerController,loginController,getAccessTokenController}