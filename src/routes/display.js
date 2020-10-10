import {Router} from 'express';
import {uploadService} from "../services";

let router = Router();

/* GET /:id */
router.get('/:id', async (req, res, next) => {
    if (!req.params.id) return next(new Error('No Id provided.'));
    const image = await uploadService.getInfo(req.params.id);
    return res.render('view', {image: image})
});

export default router;
