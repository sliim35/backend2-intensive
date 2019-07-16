// Core
const request = require('supertest');

// Instruments
const { app } = require('../../../../../server');
let server = request(app);
let credentials = null;

beforeAll(async (done) => {
    const email = 'jdoe@lectrum.io';
    const response = await server.post('/api/login').send({ email });
    const [ source ] = response.headers[ 'set-cookie' ][ 0 ].split(';');
    credentials = source;

    done();
});

describe('/api/lessons/:lessonHash/keynotes', () => {
    test('should handle post request', (done) => {
        const data = {};
        request(app)
            .post('/api/lessons/1/keynotes')
            .set('Cookie', credentials)
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(error, { body }) {
                if (error) {
                    throw error;
                }

                expect(body.data).toEqual(data);
                done();
            });
    });
});
