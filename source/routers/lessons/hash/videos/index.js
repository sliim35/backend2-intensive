// Core
import dg from 'debug';

// Instruments
import { Lessons } from '../../../../controllers';

const debug = dg('router:lessons:videos');

export const addVideo = async (req, res) => {
    debug(`${req.method} - ${req.originalUrl}`);

    try {
        const { lessonHash } = req.params;
        const model = new Lessons({ hash: lessonHash, payload: req.body });
        const data = await model.addVideo();

        res.status(201).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const putByHash = (req, res) => {
    try {
        res.status(200).json({});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteByHash = (req, res) => {
    try {
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
