// Core
const request = require('supertest');

// Instruments
const { app } = require('../../../server');

describe('/login route', () => {
    test('should handle post request', (done) => {
        request(app)
            .post('/api/login')
            .send({ name: 'john' })
            .expect(204)
            .end((error, response) => {
                if (error) {
                    throw error;
                }

                done();
            });
    });
});
