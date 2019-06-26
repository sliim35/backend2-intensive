// Core
import express from 'express';

// Instruments
import { get, post, enroll, expell } from './route';
import { getByHash, deleteByHash, putByHash } from './hash/route';

export const router = express.Router();

router.get('/', get);
router.post('/', post);
router.post('/enroll', enroll);
router.post('/expell', expell);

router.get('/:userHash', getByHash);
router.delete('/:userHash', deleteByHash);
router.put('/:userHash', putByHash);

export { router as classes };
