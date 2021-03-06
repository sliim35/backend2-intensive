// Core
import mongoose from 'mongoose';
import dg from 'debug';

const debug = dg('db');

const mongooseOptions = {
    promiseLibrary:    global.Promise,
    poolSize:          50,
    keepAlive:         30000,
    connectTimeoutMS:  5000,
    reconnectTries:    Number.MAX_SAFE_INTEGER,
    reconnectInterval: 5000,
    useNewUrlParser:   true,
    useFindAndModify:  false,
    useCreateIndex:    true,
};

const connection = mongoose.connect('mongodb://18.195.151.104:27017/mdvoy', mongooseOptions);

connection
    .then(() => {
        debug('Connected to DB');
    })
    .catch(({ message }) => {
        debug(`DB connection error: ${message}`);
    });
