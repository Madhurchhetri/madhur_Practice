
const { registerService, loginService, getAccessTokenService , logoutService } = require('../services/auth.service');

let registerController = async (req, res)=>{
    
    let {accessToken , refreshToken , newUser}  = await registerService(req.body)

    res.cookie('accessToken' , accessToken,{
        httpOnly: true,
        sameSite: "none",
        secure: true,
        maxAge : 24 * 60 * 60 * 1000,
    })
    res.cookie('refreshToken' , refreshToken,{
        httpOnly: true,
        sameSite: "none",
        secure: true,
        maxAge : 7 * 24 * 60 * 60 * 1000,
    })

    return res.status(200).json({
        message: "register successfully",
        user : newUser
    })
}

let loginController = async (req, res) => {

    let { accessToken, refreshToken, isExisted } =
        await loginService(req.body);

    res.cookie('accessToken', accessToken, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
        maxAge: 24 * 60 * 60 * 1000,
    });

    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
        message: "login successfully",
        user: isExisted
    });
};

let logoutController = async (req, res) => {
    try {
        let refreshToken = req.cookies.refreshToken;

        await logoutService(refreshToken);

        res.clearCookie('accessToken', {
            httpOnly: true,
            sameSite: "none",
            secure: true,
        });

        res.clearCookie('refreshToken', {
            httpOnly: true,
            sameSite: "none",
            secure: true,
        });

        return res.status(200).json({
            message: "logout successfully"
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Logout failed"
        });
    }
};

let getAccessTokenController = async (req, res)=>{
    let refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.status(401).json({
        message :"unAuthorized request"
    })
    let accessToken = await getAccessTokenService(refreshToken)

    res.cookie('accessToken', accessToken, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
        maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
        message :"Access token generated"
    })

}

module.exports = {registerController,loginController , getAccessTokenController ,  logoutController}