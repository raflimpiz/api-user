const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");

router.get("/users", userController.index);

router.get("/usersById/:id", userController.getUserById);

router.post("/user", userController.userPost);

router.put("/user/:id", userController.userPut);

router.delete("/user/:id", userController.userDel);

module.exports = router;
