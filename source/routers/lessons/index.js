// Core
import express from 'express';

// Instruments
import { get, post } from './route';
import { getByHash, deleteByHash, putByHash } from './hash/route';
import { addVideo, removeVideo } from './hash/videos/route';
import { addKeynote, removeKeynote } from './hash/keynotes/route';
import { playVideoByHash } from './hash/videos/hash/route';
import { getKeynoteByHash } from './hash/keynotes/hash/route';

export const router = express.Router();

router.get('/', get);
router.post('/', post);

router.get('/:lessonHash', getByHash);
router.delete('/:lessonHash', deleteByHash);
router.put('/:lessonHash', putByHash);

router.post('/:lessonHash/videos', addVideo);
router.delete('/:lessonHash/videos', removeVideo);
router.post('/:lessonHash/keynotes', addKeynote);
router.delete('/:lessonHash/keynotes', removeKeynote);

router.get('/:lessonHash/videos/:videoHash', playVideoByHash);
router.get('/:lessonHash/keynotes/:keynoteHash', getKeynoteByHash);

export { router as lessons };
