const { registerService, loginService, getAccessTokenService } = require("../service/auth.service")


let registerController = async (req, res)=>{
    
    let{newUser , accessToken ,refreshToken} = await registerService(req.body)
      
       res.cookie('accessToken',accessToken,{
        httpOnly : true,
        sameSite:'lax',
        secure:false,
        maxAge:1000*60*60
    })

    res.cookie('refreshToken',refreshToken,{
        httpOnly : true,
        sameSite:'lax',
        secure:false,
        maxAge:1000*60*60
    })

    return res.status(200).json({
        message:"register successfully",
        user : newUser
    })  

}

let loginController = async (req,res)=>{
    
    let {isExisted , accessToken , refreshToken} = await loginService(req.body)
    
       res.cookie('accessToken',accessToken,{
        httpOnly : true,
        sameSite:'lax',
        secure:false,
        maxAge:1000*60*60
    })

    res.cookie('refreshToken',refreshToken,{
        httpOnly : true,
        sameSite:'lax',
        secure:false,
        maxAge:1000*60*60
    })

    return res.status(200).json({
        message:"login  successfully",
        user : isExisted
    })

    
}

let getAccessTokenController = async(req,res)=>{

    let refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.status(401).json({
        message:"unathurised request"
    })

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

module.exports = {
    registerController,
    loginController,
    getAccessTokenController
}