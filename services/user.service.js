const bcrypt = require("bcrypt");
const User = require("../models/user.model");

class UserService {
    // create/register a user
  async registerUser(userData) {
    const { username, password, role } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User.create({
      username,
      password: hashedPassword,
      role,
    });

    return newUser;
  }
  // edit a room
  async update(id, userUpdate) {
    return await User.findByIdAndUpdate(id, userUpdate, {
      new: true,
    });
  }
  // delete a room
  async delete(id) {
    return await User.findByIdAndDelete(id);
  }
  // fetch a single room by id
  async fetchOneById(id) {
    return await User.findById(id);
  }
  // fetch a single room by any filter
  async fetchOne(query) {
    return await User.findOne(query);
  }
  // fetch all rooms
  async fetch(filter) {
    return await User.find(filter);
  }
}

module.exports = new UserService();
