const Room = require('../models/room.model');

/* This part of my code base handles reusable business logic of my application that can be used across different parts of my application, eg database queries.
like CRUD operations*/

// making these function calls asynchronous because database queries take some time
class RoomService {
    // create a room
    async create(roomData) {
        return await Room.create(roomData);
    }
    // edit a room
    async update(id, roomUpdate) {
        return await Room.findByIdAndUpdate(id, roomUpdate, {
            new: true
        })
    }
    // delete a room
    async delete(id) {
        return await Room.findByIdAndDelete(id)
    }
    // fetch a single room by id
    async fetchOneById(id) {
        return await Room.findById(id)
    }
    // fetch a single room by any filter
    async fetchOne(query) {
        return await Roomtype.findOne(query);
    }
    // fetch all rooms
    async fetch(filter) {
        return await Room.find(filter)
    }
}

module.exports = new RoomService();