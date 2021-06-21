const express = require('express');
const logRouteMiddleware = require('../middlewares/logRoute');
const player = require('./player');
const router = express.Router();


// added logging to the routes using middleware
router.use('/player',logRouteMiddleware,player);

module.exports = router;