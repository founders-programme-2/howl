const express = require('express');

const router = express.Router();

const { uploadImg, multerUploads, cloudinaryConfig } = require('./middlewares/uploadImg');


router.post('/uploadImg', cloudinaryConfig, multerUploads, uploadImg);


module.exports = router;
