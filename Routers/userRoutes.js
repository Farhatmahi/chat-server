const express = require('express');
const router = express.Router()
const {registerUser, allUser} = require('../Controller/userController');

router.route('/').post(registerUser)
router.route('/').get(allUser)

module.exports = router
