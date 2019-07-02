import express from 'express';
import winston from 'winston';

// Instruments
import { app } from './server';
import { getPort } from './utils';

// Routers
import { users } from './routers';

const PORT = getPort();

const logger = winston.createLogger({
    level:      'debug',
    format:     winston.format.json(),
    transports: [ new winston.transports.Console() ],
});

app.use(express.json({ limit: '10kb' }));

// Logger
if (process.env.NODE_ENV === 'development') {
    app.use((req, res, next) => {
        logger.debug(`${req.method} ${[ new Date() ]} \n ${JSON.stringify(req.body, null, 2)}`);
        next();
    });
}

app.use('/api/users', users);

app.listen(PORT, () => {
    console.log(`Server API is up on port ${PORT}`);
});
