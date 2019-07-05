import { format, createLogger, transports } from 'winston';
const { combine, timestamp, label, printf, simple } = format;
import path from 'path';

const logFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

const options = {
    file: {
        level:            'error',
        filename:         path.resolve(__dirname, '../logs/errors.log'),
        handleExceptions: true,
        json:             true,
        maxsize:          5242880, // 5MB
        maxFiles:         5,
        colorize:         false,
        format:           combine(timestamp(), printf(({ timestamp, message }) => `${timestamp} ${message}`)),
    },
    console: {
        level:            'debug',
        handleExceptions: true,
        json:             false,
        colorize:         true,
        format:           combine(label({ label: 'school API' }), timestamp(), logFormat),
    },
};

export const logger = createLogger({
    transports: [new transports.Console(options.console), new transports.File(options.file)],
});
