const router = require('express').Router();
const roomRouter = require('../routes/room.routes');
const roomtypeRouter = require('../routes/roomtype.routes');

router.use('/room', roomRouter);
router.use('/roomtype', roomtypeRouter);

module.exports = router;
