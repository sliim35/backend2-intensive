// Core
import express from 'express';

// Instruments
import { get, post } from './route';
import { getByHash, putByHash, deleteByHash } from './hash/route';

// Helpers
import { limiter, validator, authorization } from '../../utils';

// Validation schema
import { createUser } from '../../schemas/createUser';

export const router = express.Router();

router.get('/', [limiter(5, 60 * 1000), authorization], get);
router.post('/', [validator(createUser)], post);

router.get('/:userHash', [authorization], getByHash);
router.put('/:userHash', [authorization], putByHash);
router.delete('/:userHash', [authorization], deleteByHash);

export { router as users };
