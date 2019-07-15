// Core
import dg from 'debug';

// Instruments
import { getPort } from './utils';
import { app } from './server';

const debug = dg('server:main');
const PORT = getPort();

app.listen(PORT, () => {
    debug(`Server API is up on port ${PORT}`);
});
