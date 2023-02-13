const express = require("express");
const userController = require("../controller/userController");
const router = express.Router();

router.get("/", userController.getAllUsers)
router.get("/stat", userController.getAllUsersInfo)
router.get("/:id", userController.getSingleUser)
router.post("/login", userController.loginUser)
router.post("/register", userController.registerUser)

router.all("*", (req, res) => {
    res.status(404).send("This user route does not exist");
});

module.exports = router