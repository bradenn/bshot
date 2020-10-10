import {Router} from 'express';
import {uploadService} from "../services";

let router = Router();

/* GET /:id */
router.get('/:id', async (req, res, next) => {
    if (!req.params.id) return next(new Error('No Id provided.'));
    const image = await uploadService.getImage(req.params.id);
    if(!image.err) {
        return res.writeHead(200, {
            'Content-Type': 'image/jpg',
            'Content-Length': image.length
        }).end(image);
    }else{
        next(new Error('Image not found.'))
    }
});

export default router;
