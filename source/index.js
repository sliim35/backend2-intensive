// Instruments
import { app } from './server';
import { getPort } from './utils';

// Routers
import { users } from './routers';

const PORT = getPort();

app.use('/users', users);

app.listen(PORT, () => {
    console.log(`Server API is up on port ${PORT}`);
});
