const express = require("express");
const router = express.Router();
const RoomtypeController = require("../controllers/roomtype.controller");

router.post("/", RoomtypeController.createRoomtype);
router.patch("/:id", RoomtypeController.updateRoomtype);
router.delete("/:id", RoomtypeController.deleteRoomtype);
router.get("/:id", RoomtypeController.fetchOne);
router.get("/", RoomtypeController.fetchMany);


module.exports = router;