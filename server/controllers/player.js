const playerDAO = require('../dao/player');
const formatDAOResponse = require('../utils/formatDAOResponse');

const getAvailabilityById = async (req,res) => {
  const { playerId } = req.params;
  const playerInfo = await playerDAO.getAvailabilityById(playerId);
  return formatDAOResponse(playerInfo,res);
}

const getDataByJsonFileName = async (req,res) => {
  const { playerIdJsonFileName } = req.params;
  const playerInfo = await playerDAO.getDataByJsonFileName(playerIdJsonFileName);
  return formatDAOResponse(playerInfo,res);
}


 module.exports = {
  getAvailabilityById,
  getDataByJsonFileName,
 }