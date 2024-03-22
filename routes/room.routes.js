const express = require("express");
const router = express.Router();
const RoomController = require("../controllers/room.controller");

router.post("/", RoomController.createRoom);
router.patch("/:id", RoomController.updateRoom);
router.delete("/:id", RoomController.deleteRoom);
router.get("/:id", RoomController.fetchOne);
router.get("/", RoomController.fetchMany);


module.exports = router;