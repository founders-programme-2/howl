const express = require('express');

const router = express.Router();

const { uploadImg, multerUploads, cloudinaryConfig } = require('./middlewares/uploadImg');


router.post('/uploadImg', [cloudinaryConfig, multerUploads, uploadImg]);

router.post('/posts/create', require('./controllers/story').create);

module.exports = router;
