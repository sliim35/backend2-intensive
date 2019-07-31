// Instruments
import { getPassword } from '../';

describe('getPassword', () => {
    test('getPassword should throw an error if password does not pass requirements', () => {
        process.env.PASSWORD = '123456789';

        expect(() => getPassword()).toThrow(
            'Environment variable PASSWORD should have a minimum eight characters, at least one letter, one number and one special character',
        );
    });

    test('getPassword should throw an error', () => {
        delete process.env.PASSWORD;

        expect(() => getPassword()).toThrow('Environment variable PASSWORD should be specified');
    });

    test('getPassword should return an password', () => {
        process.env.PASSWORD = 'test$1$Very$strong';

        expect(getPassword()).toBe('test$1$Very$strong');
    });
});
