const express = require('express');

var app = express();


// app.use("/api", require("./ejemplo"));
app.use("/api", require("./usuario"));

module.exports = app;