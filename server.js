// server.js

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 4000;

// import the account and editAccount routes
const accountRoutes = require("./routes/account");
const editAccountRoutes = require("./routes/editAccount");

// connect to the MongoDB database
mongoose.connect("mongodb://localhost/my-database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// middleware
app.use(bodyParser.json());

// set up the routes
app.use("/api/account", accountRoutes);
app.use("/api/edit-account", editAccountRoutes);

// start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
