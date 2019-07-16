// Core
const request = require('supertest');

// Instruments
const { app } = require('../../../server');

describe('/login route', () => {
    test('should handle post request', (done) => {
        request(app)
            .post('/api/login')
            .send({ name: 'john' })
            .expect(204);
        done();
    });
});

describe('/logout route', () => {
    test('should handle post request', (done) => {
        request(app)
            .post('/api/logout')
            .expect(204);
        done();
    });
});
