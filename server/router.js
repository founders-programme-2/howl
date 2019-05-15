const express = require('express');
const controllers = require('./controllers');

const { uploadImg, multerUploads, cloudinaryConfig } = require('./middlewares/uploadImg');


const router = express.Router();


router.post('/uploadImg', [cloudinaryConfig, multerUploads, uploadImg]);

router.post('/posts/create', controllers.Story.create);

module.exports = router;
