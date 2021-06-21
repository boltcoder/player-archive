const express = require('express');
const playerController = require('../controllers/player');
const router = express.Router();

// all routes related to player


router.route('/data/:playerId')
.get(playerController.getAvailabilityById);


router.route('/profile/:playerIdJsonFileName')
.get(playerController.getDataByJsonFileName);

module.exports = router;