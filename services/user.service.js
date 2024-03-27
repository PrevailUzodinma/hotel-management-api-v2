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

  // login a user

  async loginUser(userData) {
    const { username, enteredPassword } = userData;
    const existingUser = User.findOne(username);
    if (!existingUser) {
      throw new Error("User does not exist");
    }
    // take user password and compare to entered password
    const isPasswordValid = await bcrypt.compare(
      enteredPassword,
      existingUser.password
    );
    if (!isPasswordValid) {
      throw new Error("Invalid Password");
    }

    return existingUser;
  }
  
  // edit a user
  async update(id, userUpdate) {
    return await User.findByIdAndUpdate(id, userUpdate, {
      new: true,
    });
  }
  // delete a user
  async delete(id) {
    return await User.findByIdAndDelete(id);
  }
  // fetch a single user by id
  async fetchOneById(id) {
    return await User.findById(id);
  }
  // fetch a single user by any filter
  async fetchOne(query) {
    return await User.findOne(query);
  }
  // fetch all users
  async fetch(filter) {
    return await User.find(filter);
  }
}

module.exports = new UserService();
