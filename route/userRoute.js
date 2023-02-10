const express = require("express");
const userController = require("../controller/userController");
const router = express.Router();

router.get("/", userController.getAllUsers)
router.get("/:id", userController.getSingleUser)
router.get("/stat", userController.getAllUsersInfo)
router.get("/stat/:id", userController.getSingleUserInfo)

router.post("/register", userController.registerUser)


module.exports = router