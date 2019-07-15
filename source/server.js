// Core
import express from 'express';

// Instruments
import { logger, errorLogger } from './utils';

// Routers
import { auth, users, classes, lessons } from './routers';

const app = express();

app.use(express.json({ limit: '10kb' }));

// Logger
if (process.env.NODE_ENV === 'development') {
    app.use((req, res, next) => {
        let body = null;

        if (req.method !== 'GET') {
            body = JSON.stringify(req.body, null, 2);
        }

        logger.debug(`${req.method} ${body ? `\n${body}` : ''}`);
        next();
    });
}

// Routers
app.use('/api', auth);
app.use('/api/users', users);
app.use('/api/classes', classes);
app.use('/api/lessons', lessons);

if (process.env.NODE_ENV !== 'test') {
    // eslint-disable-next-line no-unused-vars
    app.use((error, req, res, next) => {
        const { name, message, statusCode } = error;
        const errorMessage = `${name}: ${message}`;

        errorLogger.error(errorMessage);

        const status = statusCode ? statusCode : 500;
        res.status(status).json({ message: message });
    });
}

export { app };
