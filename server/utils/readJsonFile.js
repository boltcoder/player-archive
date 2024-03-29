const fs = require('fs');
const fsPromises = fs.promises;
const logger = require('../utils/logger');

// helper util to read off a json file asynchronously
const readJsonFile = async (filePath) => {
  try{ 
    const json = await fsPromises.readFile(filePath, 'utf8');
    return JSON.parse(json);
  } catch(e) {
    logger.error(`Error Reading ${filePath} ${e}`);
    return null
  }
}
module.exports = readJsonFile;