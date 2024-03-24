const express = require("express");
const router = express.Router();
const validate = require('../middlewares/validate');
const authenticate = require('../middlewares/authenticate');
const authorize = require('../middlewares/authorize');
const RoomtypeController = require("../controllers/roomtype.controller");
const roomtypeValidationSchema = require('../middlewares/validate.roomtype')

router.post("/", authenticate, authorize, validate(roomtypeValidationSchema), RoomtypeController.createRoomtype);
router.patch("/:id", authenticate, authorize, validate(roomtypeValidationSchema), RoomtypeController.updateRoomtype);
router.delete("/:id", authenticate, authorize, RoomtypeController.deleteRoomtype);
router.get("/:id", RoomtypeController.fetchOne);
router.get("/", RoomtypeController.fetchMany);


module.exports = router;