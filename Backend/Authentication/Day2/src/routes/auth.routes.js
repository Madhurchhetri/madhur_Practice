let express = require('express');
const { registerController, loginController, getAccessTokenController } = require('../controllers/auth.controller');

let router = express.Router()

router.post('/register' , registerController )
router.post('/login' , loginController)
router.get('/get-access', getAccessTokenController)
router.get('/me', authMiddleware ,(req,res)=>{
    return res.status(200).json({
        message: "cuurently loggedin user",
        user:req.user,
    })
})

module.exports = router;