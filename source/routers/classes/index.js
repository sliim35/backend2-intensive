// Core
import express from 'express';

// Instruments
import { get, post, enroll, expell } from './route';
import { getByHash, deleteByHash, putByHash } from './hash/route';

// Helpers
import { authorization } from '../../utils';

export const router = express.Router();

router.get('/', get);
router.post('/', [authorization], post);

router.post('/enroll', [authorization], enroll);
router.post('/expell', [authorization], expell);

router.get('/:userHash', [authorization], getByHash);
router.delete('/:userHash', [authorization], deleteByHash);
router.put('/:userHash', [authorization], putByHash);

export { router as classes };
