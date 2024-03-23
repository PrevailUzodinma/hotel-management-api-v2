const router = require('express').Router();
const roomRouter = require('../routes/room.routes');
const roomtypeRouter = require('../routes/roomtype.routes');

router.use('/rooms', roomRouter);
router.use('/room-types', roomtypeRouter);

module.exports = router;
