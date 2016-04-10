'use strict';

var express = require('express');
var car = require('./Car');
var insr = require('./Insurance');
var router = express.Router();

router.get('/', car.info);
router.get('/rcImage',car.rcImage);
router.get('/insurance',insr.info);
module.exports = router;
