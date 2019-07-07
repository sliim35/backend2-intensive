import passportLibrary from 'passport';
import {Strategy, ExtractJwt} from 'passport-jwt';

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:    'secret',
};

const strategy = new Strategy(opts, (payload, next) => {
    console.log('payload', payload);
    next();
});

export const passport = passportLibrary.use(strategy);
