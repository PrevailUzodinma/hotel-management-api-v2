const { updateMany } = require("../models/room.model");
const Roomtype = require("../models/roomtype.model");

/* This part of my code base handles reusable business logic of my application that can be used across different parts of my application, eg database queries.
like CRUD operations*/

// making these function calls asynchronous because database queries take some time

class RoomtypeService {
    // create a roomtype
  async create(roomtypeData) {
    return await Roomtype.create(roomtypeData)
  }
    // edit a roomtype
  async update(id, roomtypeUpdate) {
    return await Roomtype.findByIdAndUpdate(id, roomtypeUpdate, {
      new: true
    })
  }
    // delete a roomtype
  async delete(id) {
    return await Roomtype.findByIdAndDelete(id)
  }
    // get a single roomtype
  async fetchOne(id) {
    return await Roomtype.findById(id)
  }
    // get all roomtypes
  async fetch(filter) {
    return await Roomtype.find(filter)
  }
}

module.exports = new RoomtypeService();
