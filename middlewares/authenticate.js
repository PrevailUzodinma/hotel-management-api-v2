const jwt = require("jsonwebtoken");
const express = require('express');

const authenticate = (res, req, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: "Authorization token is required" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token." });
  }
};

module.exports = authenticate;
