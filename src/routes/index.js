import express from 'express';
import view from './view';
import display from './display';
import upload from './upload';

const router = express.Router();

router.use('/upload/image', upload)
router.use('/image', view)
router.use('/', display)

export default router;
