const mongoose = require("mongoose");
const Roomtype = require("./roomtype.model");

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  roomtype: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Roomtype',
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
