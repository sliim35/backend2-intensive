// Core
import express from 'express';

// Instruments
import { get, post } from './route';
import { getByHash, putByHash, deleteByHash } from './hash/route';

export const router = express.Router();

router.get('/', get);
router.post('/', post);

router.get('/:userHash', getByHash);
router.put('/:userHash', putByHash);
router.delete('/:userHash', deleteByHash);

export { router as users };
