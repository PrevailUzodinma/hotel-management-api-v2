const jwt = require('jsonwebtoken');

const generateJwtSecret = (length) => {
    return jwt.sign({}, jwt.generateSecret({ length }));
};

const jwtSecret = generateJwtSecret(32);
console.log(jwtSecret);