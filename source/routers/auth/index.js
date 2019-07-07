// Core
import express from 'express';
import passport from 'passport';

// Instruments
import { login, logout } from './route';
import { limiter, authenticate } from '../../utils';

export const router = express.Router();

router.post('/login', [ limiter(5, 60 * 1000) ], login);
router.post('/logout', [ authenticate, limiter(5, 60 * 1000) ], logout);
router.post('/github', passport.authenticate('github', { scope: [ 'user:email' ] }));

export { router as auth };
