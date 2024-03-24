const bcrypt = require('bcrypt');
const User = require('../models/user.model');

const registerUser = async (userData) =>{
    const { username, password, role } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User.create({
        username,
        password: hashedPassword,
        role
    })

    return newUser;
}

module.exports = {registerUser};