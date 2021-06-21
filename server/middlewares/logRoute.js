const logger = require('../utils/logger');

// express middleware to just log a route's access
const logRouteMiddleware = (req,res, next) => {
  logger.info(`Route Access : ${req.method} ${req.originalUrl}`);
  next();
}
module.exports = logRouteMiddleware;