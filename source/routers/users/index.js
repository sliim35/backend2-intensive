// Core
import express from 'express';

// Instruments
import { get, post } from './route';
import { getByHash, putByHash, deleteByHash } from './hash/route';

// Helpers
import {limiter, validator} from '../../utils';

// Validation schema
import {createUser} from '../../schemas/createUser';

export const router = express.Router();

router.get('/', [ limiter(5, 60 * 1000) ], get);
router.post('/', [ validator(createUser) ], post);

router.get('/:userHash', getByHash);
router.put('/:userHash', putByHash);
router.delete('/:userHash', deleteByHash);

export { router as users };
