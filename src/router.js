const express = require('express');
const { Story, getStory } = require('./controllers');

const { uploadImg, multerUploads, cloudinaryConfig } = require('./middlewares/uploadImg');

const router = express.Router();

router.get('/posts/:id', getStory.getStory);
router.get('/archive/feed', controllers.Feed.feed);
router.post('/upload', [cloudinaryConfig, multerUploads, uploadImg]);
router.post('/posts/create', Story.create);

module.exports = router;
