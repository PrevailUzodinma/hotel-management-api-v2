const express = require("express");
const router = express.Router();
const validate = require('../middlewares/validate');
const authenticate = require('../middlewares/authenticate');
const authorize = require('../middlewares/authorize');
const RoomController = require("../controllers/room.controller");
const roomValidationSchema = require("../middlewares/validate.room");

router.post("/", authenticate, authorize, validate(roomValidationSchema), RoomController.createRoom);
router.patch("/:id", authenticate, authorize, validate(roomValidationSchema), RoomController.updateRoom);
router.delete("/:id", authenticate, authorize, RoomController.deleteRoom);
router.get("/:id", RoomController.fetchOne);
router.get("/", RoomController.fetchMany);


module.exports = router;