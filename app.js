const express = require('express');
const app = express();
const router = require('./routes/index.routes');
const curl = require('curl');
const mongoose = require('mongoose')
require('dotenv').config();
const port = process.env.PORT || 3838;


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(port, () =>{
    console.log(`Server has started running on port ${port}`);
})