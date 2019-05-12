const express = require('express');

const router = express.Router();

const { uploadImg } = require('./middlewares/uploadImg');
const { multerUploads } = require('./middlewares/multerUploads');
const { cloudinaryConfig } = require('./config/cloudinaryConfig');

router.post('/uploadImg', cloudinaryConfig, multerUploads, uploadImg);


module.exports = router;
