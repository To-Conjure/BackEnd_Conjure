const express = require("express");
const userController = require("../controller/userController");
const router = express.Router();

router.get("/", userController.getAllUsers)
router.get("/stat", userController.getAllUsersInfo)
router.get("/stat/:id", userController.getSingleUserInfo)
router.get("/:id", userController.getSingleUser)

module.exports = router