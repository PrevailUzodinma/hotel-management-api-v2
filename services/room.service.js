const Room = require('../models/room.model');

/* This part of my code base handles reusable business logic of my application that can be used across different parts of my application, eg database queries.
like CRUD operations*/

// making these function calls asynchronous because database queries take some time
class RoomService {
    // create a room
    async create(roomData) {}
    // edit a room
    async update(id, roomUpdate) {}
    // delete a room
    async delete(id) {}
    // fetch a single room
    async fetchOne(id) {}
    // fetch all rooms
    async fetch(filter) {}
}

module.exports = RoomService;