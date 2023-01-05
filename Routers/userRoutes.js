const express = require('express');
const router = express.Router()
const {registerUser, allUsers, checkExistedUser} = require('../Controller/userController');
const { protect } = require('../Middleware/AuthMiddleware');

router.route('/').post(registerUser)
router.route('/').get(protect, allUsers)
router.route('/users').get(checkExistedUser)

module.exports = router
