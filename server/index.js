const app = require('./app');
const config = require('./config');
const logger = require('./utils/logger');

// start the app and listen on port as per config
const server = app.listen(config.PORT, () => {
  logger.info(`Listening on port : ${config.PORT}`);
});

// handle global exception
// in an ideal world, I'd be using PM2 for auto restart
const handleException = (error) => {
  logger.error(error);
  if (server) {
    server.close(() => {
      logger.info("Closed server");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

// handle global exceptions 
process.on('unhandledRejection', handleException);
process.on('uncaughtException', handleException);


// cmd+c
process.on('SIGTERM', () => {
  if (server) {
    logger.info("Closed server on SIGTERM");
    server.close();
  }
});
