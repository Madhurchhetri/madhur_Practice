let express = require('express');
let {registerController,loginController} = require('../controller/auth.controller');

let router = express.Router();

router.post('/register',registerController)
router.post('/login',loginController)

module.exports = router;