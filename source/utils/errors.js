export class NotFoundError extends Error {
    constructor(message, statusCode, ...args) {
        super(...args);

        this.name = 'NotFoundError';
        this.statusCode = statusCode || 404;
        this.message = message;
    }
}

export class ValidationError extends Error {
    constructor(message, statusCode) {
        super(...args);

        this.name = 'ValidationError';
        this.statusCode = statusCode || 400;
        this.message = message;
    }
}
