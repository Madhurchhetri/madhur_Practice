let express = require('express');
let {registerController,loginController, getAccessTokenController} = require('../controller/auth.controller');

let router = express.Router();

router.post('/register',registerController)
router.post('/login',loginController)
router.get('/get-acessToken' , getAccessTokenController)

module.exports = router;