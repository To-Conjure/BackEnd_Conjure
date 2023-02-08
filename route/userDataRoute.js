const express = require("express");
const userDataController = require("../controller/userDataController");
const router = express.Router();

router.get("/", userDataController.getAllUsersData)
router.get("/:id", userDataController.getSingleUserData)

module.exports = router