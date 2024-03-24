const express = require("express");
const router = express.Router();
const UserController = require('../controllers/user.controller')

router.post("/", UserController.createUser);
router.patch("/:id", UsertypeController.updatUser);
router.delete("/:id", UserController.deleteUser);
router.get("/:id", UserController.fetchOne);
router.get("/", UserController.fetchMany);

module.exports = router;