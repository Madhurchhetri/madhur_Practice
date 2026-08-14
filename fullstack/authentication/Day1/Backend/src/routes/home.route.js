let express = require('express')
const authMiddleware = require('../middleware/auth.middleware')

let router = express.Router()

router.get('/', authMiddleware , (req, res)=>{
    res.status(200).json({
        message:"home fetched"
    })
})

module.exports = router