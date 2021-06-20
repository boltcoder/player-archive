const app = require('./app');
const config = require('./config');
const logger = require('./utils/logger');


const server = app.listen(config.PORT, () => {
  logger.info("Listening on port", config.PORT );
});


const handleException = (error) => {
  console.log(error);
  if (server) {
    server.close(() => {
      logger.info("Closed server");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

process.on('unhandledRejection', handleException);
process.on('uncaughtException', handleException);


// cmd+c
process.on('SIGTERM', () => {
  if (server) {
    logger.info("Closed server on SIGTERM");
    server.close();
  }
});
