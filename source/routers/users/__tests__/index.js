// Core
const request = require('supertest');

// Instruments
const { app } = require('../../../server');
let server = request(app);
let credentials = null;

beforeAll(async (done) => {
    const email = 'jdoe@lectrum.io';
    const response = await server.post('/api/login').send({ email });
    const [ source ] = response.headers[ 'set-cookie' ][ 0 ].split(';');
    credentials = source;

    done();
});

describe('/api/users', () => {
    test('should handle get request', (done) => {
        const data = [];

        request(app)
            .get('/api/users')
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

    test('should handle post request', (done) => {
        const data = {};

        request(app)
            .post('/api/users')
            .expect('Content-Type', /json/)
            .send({
                name:     'john',
                email:    'jdoe@lectrum.io',
                password: '123456',
                phone:    '+79111111111',
                sex:      'm',
            })
            .expect(201)
            .end(function(error, { body }) {
                if (error) {
                    throw error;
                }

                expect(body.data).toEqual(data);
                done();
            });
    });
});
