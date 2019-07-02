import express from 'express';
import winston from 'winston';
import dg from 'debug';

// Instruments
import { app } from './server';
import { getPort } from './utils';

// Routers
import { auth, users, classes, lessons } from './routers';

const PORT = getPort();
const debug = dg('server:main');

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

// Routers
app.use('/api/auth', auth);
app.use('/api/users', users);
app.use('/api/classes', classes);
app.use('/api/lessons', lessons);

app.listen(PORT, () => {
    debug(`Server API is up on port ${PORT}`);
});
