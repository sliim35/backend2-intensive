// Core
import dg from 'debug';

// Instruments
import { Classes } from '../../controllers/';

const debug = dg('router:classes');

export const get = (req, res) => {
    debug(`${req.method} - ${req.originalUrl}`);

    try {
        const data = [];

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const post = async (req, res) => {
    debug(`${req.method} - ${req.originalUrl}`);

    try {
        const classes = new Classes(req.body);
        const { hash } = await classes.create();

        res.status(201).json({ hash });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
