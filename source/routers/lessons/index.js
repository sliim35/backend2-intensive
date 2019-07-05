// Core
import express from 'express';

// Instruments
import { get, post } from './route';
import { getByHash, deleteByHash, putByHash } from './hash/route';
import { addVideo, removeVideo } from './hash/videos/route';
import { addKeynote, removeKeynote } from './hash/keynotes/route';
import { playVideoByHash } from './hash/videos/hash/route';
import { getKeynoteByHash } from './hash/keynotes/hash/route';

// Helpers
import { authorization } from '../../utils';

export const router = express.Router();

router.get('/', get);
router.post('/', [authorization], post);

router.get('/:lessonHash', [authorization], getByHash);
router.delete('/:lessonHash', [authorization], deleteByHash);
router.put('/:lessonHash', [authorization], putByHash);

router.post('/:lessonHash/videos', [authorization], addVideo);
router.delete('/:lessonHash/videos', [authorization], removeVideo);
router.post('/:lessonHash/keynotes', [authorization], addKeynote);
router.delete('/:lessonHash/keynotes', [authorization], removeKeynote);

router.get('/:lessonHash/videos/:videoHash', [authorization], playVideoByHash);
router.get('/:lessonHash/keynotes/:keynoteHash', [authorization], getKeynoteByHash);

export { router as lessons };
