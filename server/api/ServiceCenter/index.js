'use strict';

var express = require('express');
var sCenter = require('./ServiceCenter');

var router = express.Router();

router.get('/', sCenter.info);

module.exports = router;
