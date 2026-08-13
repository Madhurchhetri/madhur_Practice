let express = require('express');
const { registerController, loginController, getAccessTokenController } = require('../controllers/auth.controller');

let router = express.Router()

router.post('/register' , registerController )
router.post('/login' , loginController)
router.get('/get-access', getAccessTokenController)

module.exports = router;