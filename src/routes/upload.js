import {Router} from 'express';
import {uploadService} from "../services";
import multer from 'multer';

let router = Router();
const upload = multer();
/* POST /api/v1/users */
router.post('/', upload.single('file'), async (req, res, next) => {
    if (!req.body.file) return next(new Error('Image not received.'));
    const image = await uploadService.uploadImage(req.body.file);
    return res.json(image);
});

export default router;
