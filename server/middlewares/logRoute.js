const logger = require('../utils/logger');
const logRouteMiddleware = (req,res, next) => {
  logger.info(`Route Access : ${req.method} ${req.originalUrl}`);
  next();
}
module.exports = logRouteMiddleware;