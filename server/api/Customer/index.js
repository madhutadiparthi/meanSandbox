'use strict';

var express = require('express');
var customer = require('./Customer');

var router = express.Router();

router.get('/', customer.info);

module.exports = router;
