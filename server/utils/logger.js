const winston = require('winston');

// print full error stack
const errorFormat = winston.format((error)=> error instanceof Error ? Object.assign(error, { message: error.stack }) : error);

// only a single instance of winston should do
const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(
    errorFormat(),
    winston.format.colorize(),
    winston.format.splat(),
    winston.format.printf(({ level, message }) => `${level}: ${message}`)
  ),
  transports: [
    new winston.transports.Console({ // for now let's just Console.
      stderrLevels: ['error'],
    }),
  ],
});

module.exports = logger;