'use strict';

var express = require('express');
var serve = require('./Service');

var router = express.Router();

router.get('/', serve.info);

module.exports = router;
