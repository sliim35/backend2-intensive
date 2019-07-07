// Core
import jwt from 'jsonwebtoken';

export const authenticate = async (req, res, next) => {
    const user = req.body;

    if (!user) {
        return res.status(401).json({ message: 'no user data' });
    }

    if (user.password === '123456') {
        const token = await jwt.sign(req.body, 'super secret pa$$w0rd');

        res.setHeader('X-Token', token);

        return next();
    }

    return res.status(401).json({ message: 'credentials are not valid' });
};
