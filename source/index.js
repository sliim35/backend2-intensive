import express from 'express';

// Instruments
import { app } from './server';
import { getPort, logger } from './utils';

// Routers
import { users, auth, classes, lessons } from './routers';

const PORT = getPort();

app.use(express.json({ limit: '10kb' }));
app.use(logger);

app.use('/users', users);
app.use('/auth', auth);
app.use('/classes', classes);
app.use('/lessons', lessons);

app.listen(PORT, () => {
    console.log(`Server API is up on port ${PORT}`);
});
