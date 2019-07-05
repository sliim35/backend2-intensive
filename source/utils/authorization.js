export const authorization = (req, res, next) => {
    const password = process.env.PASSWORD;
    const {
        authorization: authorizationHeader,
    } = req.headers;
    const isValid = authorizationHeader === password;

    if (isValid && authorizationHeader) {
        return next();
    }

    res.sendStatus(401);
};
