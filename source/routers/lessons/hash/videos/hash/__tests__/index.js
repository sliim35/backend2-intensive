// Core
const request = require('supertest');

// Instruments
const { app } = require('../../../../../../server');
let server = request(app);
let credentials = null;

beforeAll(async (done) => {
    const email = 'jdoe@lectrum.io';
    const response = await server.post('/api/login').send({ email });
    const [ source ] = response.headers[ 'set-cookie' ][ 0 ].split(';');
    credentials = source;

    done();
});

describe('/api/lessons/:lessonHash/videos/:videoHash', () => {
    test('should handle get request', (done) => {
        const data = {};

        request(app)
            .get('/api/lessons/1/videos/1')
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

    test('should handle delete request', (done) => {
        const data = {};

        request(app)
            .delete('/api/lessons/1/videos/1')
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
