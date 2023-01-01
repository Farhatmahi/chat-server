const express = require('express');
const router = express.Router()
const {registerUser, allUsers} = require('../Controller/userController');
const { protect } = require('../Middleware/AuthMiddleware');

router.route('/').post(registerUser)
router.route('/').get(protect, allUsers)

module.exports = router
