var express = require('express');
var router = express.Router();
var logic = require('../utilities/utilities.js');

router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
