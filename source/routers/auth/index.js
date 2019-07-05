// Core
import express from 'express';

// Instruments
import { login, logout } from './route';

// Utils
import { authorization } from '../../utils';

export const router = express.Router();

router.post('/login', login);
router.post('/logout', [authorization], logout);

export { router as auth };
