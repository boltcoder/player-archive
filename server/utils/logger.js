const winston = require('winston');

const errorFormat = winston.format((error)=> error instanceof Error ? Object.assign(info, { message: info.stack }) : error);

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(
    errorFormat(),
    winston.format.colorize(),
    winston.format.splat(),
    winston.format.printf(({ level, message }) => `${level}: ${message}`)
  ),
  transports: [
    new winston.transports.Console({
      stderrLevels: ['error'],
    }),
  ],
});

module.exports = logger;