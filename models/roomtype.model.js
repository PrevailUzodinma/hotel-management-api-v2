const mongoose = require('mongoose');

const roomtypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
})

const Roomtype = mongoose.model('Roomtype', roomtypeSchema);

module.exports = Roomtype;