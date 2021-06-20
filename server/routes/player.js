const express = require('express');
const playerController = require('../controllers/player');
const router = express.Router();

router.route('/data/:playerId')
.get(playerController.getAvailabilityById);


router.route('/profile/:playerIdJsonFileName')
.get(playerController.getDataByJsonFileName);

module.exports = router;