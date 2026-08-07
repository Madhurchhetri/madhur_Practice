let express = require('express');
const authMiddleware = require('../middleware/auth.middleware');

let router = express.Router();

router.get('/', authMiddleware, (req, res) => {
    return res.status(200).json({
        message: "Welcome to the home page"
    })
});

module.exports = router;