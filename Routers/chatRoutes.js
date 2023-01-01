const express = require("express");
const router = express.Router();
const { accessChat } = require("../Controller/chatController");
const { protect } = require("../Middleware/AuthMiddleware");

router.route("/").post(protect, accessChat);
// router.router('/').get(protect, fetchChats)
// router.route('/group').post(protect, createGroupChat)
// router.route('/rename').put(protect, renameGroup)
// router.route('/groupRemove').put(protect, removeFromGroup)
// router.route('/groupAdd').put(protect, addToGroup)

module.exports = router;
