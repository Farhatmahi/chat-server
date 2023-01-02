const express = require("express");
const router = express.Router();
const { protect } = require("../Middleware/AuthMiddleware");
const { accessChat } = require("../Controller/chatController");
const { fetchChats } = require("../Controller/chatController");
const { createGroupChat } = require("../Controller/chatController");
const { renameGroup } = require("../Controller/chatController");
const { addToGroup } = require("../Controller/chatController");
const { removeFromGroup } = require("../Controller/chatController");

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route('/groupAdd').put(protect, addToGroup)
router.route('/groupRemove').put(protect, removeFromGroup)


module.exports = router;
