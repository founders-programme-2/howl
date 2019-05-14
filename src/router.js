import express from 'express';
import controllers from './controllers';

import { uploadImg, multerUploads, cloudinaryConfig } from'./middlewares/uploadImg';


const router = express.Router();


router.post('/uploadImg', [cloudinaryConfig, multerUploads, uploadImg]);

router.post('/posts/create', controllers.Story.create);

export default router;
