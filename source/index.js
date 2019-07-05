import express from 'express';
import { NotFoundError } from './utils/errors';

// Instruments
import { app } from './server';
import { getPort, logger } from './utils';

// Routers
import { users, auth, classes, lessons } from './routers';

const PORT = getPort();

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

app.use('/users', users);
app.use('/auth', auth);
app.use('/classes', classes);
app.use('/lessons', lessons);

app.use((req, res, next) => {
    const err = new NotFoundError(`method: ${req.method}, url: ${req.url} not found.`, 404);
    next(err);
});

app.use((err, req, res, next) => {
    if (err.name === 'NotFoundError') {
        logger.log({ level: 'error', message: `${req.method}: ${req.url}` });
        res.status(err.statusCode).json({ message: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server API is up on port ${PORT}`);
});
