// Core
const request = require('supertest');

// Instruments
const { app } = require('../../../../server');
let server = request(app);
let credentials = null;

beforeAll(async (done) => {
    const email = 'jdoe@lectrum.io';
    const response = await server.post('/api/login').send({ email });
    const [ source ] = response.headers[ 'set-cookie' ][ 0 ].split(';');
    credentials = source;

    done();
});

describe('/api/classes/:lesson/:classHash/expel', () => {
    test('should handle post request', (done) => {
        request(app)
            .post('/api/classes/2/expel')
            .set('Cookie', credentials)
            .expect('Content-Type', /json/)
            .expect(201)
            .end(function(error, { body }) {
                if (error) {
                    throw error;
                }

                expect(body.data).toEqual({});
                done();
            });
    });
});

describe('/api/classes/:lesson/:classHash/enroll', () => {
    test('should handle post request', (done) => {
        request(app)
            .post('/api/classes/2/enroll')
            .set('Cookie', credentials)
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(error, { body }) {
                if (error) {
                    throw error;
                }

                expect(body.data).toEqual([]);
                done();
            });
    });
});
