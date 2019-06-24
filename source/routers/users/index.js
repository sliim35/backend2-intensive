// Core
import express from 'express';

// Instruments
import { get, post } from './route';
import { getByHash } from './hash/route';

export const router = express.Router();

router.get('/', get);
router.post('/', post);

router.get('/:userHash', getByHash);

export { router as users };
