const express = require('express');
const { Story, getStory } = require('./controllers');

const { uploadImg, multerUploads, cloudinaryConfig } = require('./middlewares/uploadImg');


const router = express.Router();


router.post('/upload', [cloudinaryConfig, multerUploads, uploadImg]);

router.post('/posts/create', Story.create);

router.get('/posts/:id', getStory.getStory);

module.exports = router;
