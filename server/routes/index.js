const express = require('express');
const logRouteMiddleware = require('../middlewares/logRoute');
const player = require('./player');
const router = express.Router();

router.use('/player',logRouteMiddleware,player);

module.exports = router;