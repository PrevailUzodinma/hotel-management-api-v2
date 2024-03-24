const UserService = require("../services/user.service");
/* 
This is the section of my application that handles client request received from routes, processes them and sends out a response to the client
*/
class UserController {
  // create user
  async createUser(req, res) {
    try {
      const reqBody = req.body;

      // Check if the user exists
      const existingUser = await UserService.fetchOne({
        name: reqBody.name,
      });

      if (existingUser) {
        return res.status(403).json({
          success: false,
          message: "User already exists",
        });
      }

      // If not, create the user and send a response
      const newUser = await UserService.registerUser(reqBody);

      return res.status(201).json({
        success: true,
        message: "User created successfully",
        data: newUser,
      });
    } catch (error) {
      // Handle errors
      console.error("Error creating user:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  async updateUser(req, res) {
    try {
      const userId = req.params.id;
      const updateData = req.body;
      // Check if the user to edit is in the database
      const existingUser = await UserService.fetchOneById({
        _id: userId,
      });
      if (!existingUser) {
        res.status(403).json({
          success: false,
          message: "User to edit does not exist",
        });
      }

      const updatedUserData = await UserService.update(userId, updateData);
      res.status(200).json({
        success: true,
        message: "User updated successfully",
        data: updatedUserData,
      });
    } catch (error) {
      // Handle errors
      console.error("Error creating user:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  async deleteUser(req, res) {
    try {
      const userId = req.params.id;
      //Check if the user to delete is in the database
      const existingUser = await UserService.fetchOneById({
        _id: userId,
      });
      if (!existingUser) {
        res.status(403).json({
          success: false,
          message: "User to delete does not exist",
        });
      }

      const deletedUser = await UserService.delete(userId);

      res.status(200).json({
        success: true,
        message: "User deleted successfully",
        data: deletedUser,
      });
    } catch (error) {
      // Handle errors
      console.error("Error creating user:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  async fetchOne(req, res) {
    try {
      const userId = req.params.id;
      // Check if user to fetch exists is in the database
      const existingUser = await UserService.fetchOneById({
        _id: userId,
      });

      if (!existingUser) {
        res.status(403).json({
          success: false,
          message: "User to fetch does not exist",
        });
      }

      res.status(200).json({
        success: true,
        message: "User fetched successfully",
        data: existingUser,
      });
    } catch (error) {
      // Handle errors
      console.error("Error creating user:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  async fetchMany(req, res) {
    try {
      const fetchedUsers = await UserService.fetch({});

      res.status(200).json({
        success: true,
        message: "User fetched successfully",
        data: fetchedUsers,
      });
    } catch (error) {
      // Handle errors
      console.error("Error creating user:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
}

module.exports = new UserController();
