import passport from 'passport';
import {Strategy} from 'passport-github2';

passport.use(
    new Strategy({
        clientID:     '7eec1242661c25dcc13c',
        clientSecret: '705949a458ced21504065b38b916306b3c05e081',
        callbackURL:  'http://127.0.0.1:3000/api/users',
    },
    (accessToken, refreshToken, profile, done) => {
        console.log('profile', profile);
        done();
    }),
);

