const Roomtype = require("../models/roomtype.model");

/* This part of my code base handles reusable business logic of my application that can be used across different parts of my application, eg database queries.
like CRUD operations*/

// making these function calls asynchronous because database queries take some time

class RoomtypeService {
    // create a roomtype
  async create(rootypeData) {}
    // edit a roomtype
  async update(id, roomtypeUpdate) {}
    // delete a roomtype
  async delete(id) {}
    // get a single roomtype
  async fetchOne(id) {}
    // get all roomtypes
  async fetch(filter) {}
}

module.exports = RoomtypeService;
