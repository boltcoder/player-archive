const readJsonFile = require('../utils/readJsonFile');
const DAO_STATUS = require('../utils/daoStatus');
const path = require('path');

// Player's Data Access Object

// only sends back whether the player in the archive is active or inactive
const getAvailabilityById = async (id) => {
  try {
    const allPlayersArchive = await readJsonFile(path.resolve('./server/data/player.json'));
    const player = allPlayersArchive[id];
    if(!player) {
      return {
        data: null,
        status: DAO_STATUS.NOT_FOUND
      }
    }
    return {
      data: player,
      status: DAO_STATUS.FOUND,
    }
  } catch(e) {
    return {
      data: null,
      status: DAO_STATUS.ERROR,
    }
  }
}

// sends back data profile of player
const getDataByJsonFileName = async (playerId) => {
  try {
    const player = await readJsonFile(path.resolve(`./server/data/${playerId}.json`));
    if(!player) {
      return {
        data: null,
        status: DAO_STATUS.NOT_FOUND
      }
    }
    return {
      data: player,
      status: DAO_STATUS.FOUND,
    }
  } catch(e) {
    return {
      data: null,
      status: DAO_STATUS.ERROR,
    }
  }
}


 module.exports = {
  getAvailabilityById,
  getDataByJsonFileName,
 }