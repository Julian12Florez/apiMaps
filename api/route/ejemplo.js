const express = require('express');
const ejemploController = require('./../controller/ejemplo');

const { auth }  = require("./../middleware/auth");

var router = express.Router();

router.get("/ejmeplo", auth, ejemploController.index);

module.exports = router;