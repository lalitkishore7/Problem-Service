const winston = require('winston');
const { LOG_DB_URL } = require('./server.config');
const { collection } = require('../models/problem.model');
require('winston-mongodb');

const allowedTransports = [];

// Below transport configuration enables logging on the console
allowedTransports.push(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp({format: "YYYY-MM-DD HH:mm:ss"}),
      winston.format.printf((log) => `${log.timestamp} [${log.level}] : ${log.message}`)
    ),
  }),
);

// Below transport configuration enables logging on the DB
allowedTransports.push(
    new winston.transports.MongoDB({
        level: 'error',
        db: LOG_DB_URL,
        collection: 'logs',
        
    })
)

// Below transport configuration enables logging on the file
allowedTransports.push(
    new winston.transports.File({
        filename: 'app.log'

    })
)

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({
// Fisrt argument to the combine method is defining how we want the timestamp to come up
            format: 'YYYY-MM-DD HH:mm:ss'
        }),

// Second argument to the combine method, which defines what is exactly going to the printed in log
        winston.format.printf((log) => `${log.timestamp} [${log.level}] : ${log.message}`)
    ),

    transports: allowedTransports
});

module.exports = logger;