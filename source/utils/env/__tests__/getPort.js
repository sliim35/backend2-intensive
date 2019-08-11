// Instruments
import { getPort } from '../';

describe('getPort', () => {
    test('getPort should throw an error if password does not pass requirements', () => {
        process.env.PORT = '100';

        expect(() => getPort()).toThrow(
            'Environment variable PORT should a number and be between 3000 and 9999',
        );
    });

    test('getPort should throw an error', () => {
        delete process.env.PORT;

        expect(() => getPort()).toThrow('Environment variable PORT should be specified');
    });

    test('getPort should return an password', () => {
        process.env.PORT = '3000';

        expect(getPort()).toBe('3000');
    });
});
