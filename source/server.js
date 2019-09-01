// Core
import express from 'express';
import session from 'express-session';
import helmet from 'helmet';
import cors from 'cors';
import connect from 'connect-mongo';
import mongoose from 'mongoose';

// Instruments
import { Logs } from './controllers';

import {
    logger,
    errorLogger,
    NotFoundError,
    notFoundLogger,
    validationLogger,
    sessionOptions,
} from './utils';

// Routers
import { auth, users, classes, lessons } from './routers';

const app = express();
const MongoStore = connect(session);

app.use(helmet());
app.use(
    cors({
        origin:               '*',
        methods:              [ 'GET', 'PUT', 'POST', 'DELETE' ],
        preflightContinue:    false,
        optionsSuccessStatus: 204,
    }),
);

if (process.env.NODE_ENV !== 'test') {
    sessionOptions.store = new MongoStore({ mongooseConnection: mongoose.connection });
}

app.use(session(sessionOptions));
app.use(express.json({ limit: '10kb' }));

// Logger
if (process.env.NODE_ENV === 'development') {
    app.use((req, res, next) => {
        let body = null;

        if (req.method !== 'GET') {
            body = JSON.stringify(req.body, null, 2);
        }

        // For test purposes
        const logs = new Logs(req);
        logs.create();

        logger.debug(`${req.method} ${body ? `\n${body}` : ''}`);
        next();
    });
}

// Routers
app.use('/api', auth);
app.use('/api/users', users);
app.use('/api/classes', classes);
app.use('/api/lessons', lessons);

app.use('*', (req, res, next) => {
    const error = new NotFoundError(
        `Can not find right route for method ${req.method} and path ${req.originalUrl}`,
    );
    next(error);
});

if (process.env.NODE_ENV !== 'test') {
    // eslint-disable-next-line no-unused-vars
    app.use((error, req, res, next) => {
        const { name, message, statusCode } = error;
        const errorMessage = `${name}: ${message}`;

        switch (error.name) {
            case 'NotFoundError':
                notFoundLogger.error(errorMessage);
                break;

            case 'ValidationError':
                validationLogger.error(errorMessage);
                break;

            default:
                errorLogger.error(errorMessage);
                break;
        }

        const status = statusCode ? statusCode : 500;
        res.status(status).json({ message: message });
    });
}

export { app };
