const { createLogger, format, transports } = require('winston');
const { combine, timestamp, prettyPrint } = format;

export const logger = (req, res, next) => {
    if (process.env.NODE_ENV !== 'production') {
        const logger = createLogger({
            level:      'debug',
            format:     combine(timestamp(), prettyPrint()),
            transports: [new transports.Console()],
        });

        logger.debug({
            payload: req.body,
            method:  req.method,
        });
    }

    next();
};
