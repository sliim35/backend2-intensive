export const get = (req, res) => {
    const data = [];

    try {
        res.status(204).json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const post = (req, res) => {
    try {
        res.status(201).json({});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const enroll = (req, res) => {
    try {
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const expell = (req, res) => {
    try {
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
