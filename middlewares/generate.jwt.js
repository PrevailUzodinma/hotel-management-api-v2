const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const generateJwtSecret = (length) => {
    return crypto.randomBytes(length).toString('base64');
};

const jwtSecret = generateJwtSecret(32);
console.log(jwtSecret);