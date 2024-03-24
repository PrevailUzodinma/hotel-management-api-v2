const router = require('express').Router();
const roomRouter = require('../routes/room.routes');
const roomtypeRouter = require('../routes/roomtype.routes');
const userRouter = require('../routes/user.routes');

router.use('/rooms', roomRouter);
router.use('/room-types', roomtypeRouter);
router.use('/users', userRouter);

module.exports = router;
