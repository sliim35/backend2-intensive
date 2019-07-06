import express from 'express';
import session from 'express-session';
import dg from 'debug';

// Instruments
import { app } from './server';
import { getPort, logger, sessionOptions } from './utils';

// Routers
import { auth, users, classes, lessons } from './routers';

const debug = dg('server:main');
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

// Session
app.use(session(sessionOptions));

// Routers
app.use('/api/auth', auth);
app.use('/api/users', users);
app.use('/api/classes', classes);
app.use('/api/lessons', lessons);

app.listen(PORT, () => {
    debug(`Server API is up on port ${PORT}`);
});
