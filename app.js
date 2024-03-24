const express = require("express");
const app = express();
const router = require("./routes/index.routes");
const cors = require("cors");
const mongoose = require("mongoose");
const authenticate = require('./middlewares/authenticate');
const authorize =require('./middlewares/authorize');
const validate = require('./middlewares/validate');
const connectDB = require("./connectDB");

require("dotenv").config();
const port = process.env.PORT || 3000;
const db_uri = process.env.DB_URI;


//Allow requests from any origin
app.use(cors({}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use(authenticate);
app.use(authorize);
app.use(validate);

app.use("/api/v1/", router);

app.listen(port, () => {
  console.log(`Server has started running on port ${port}`);
});
