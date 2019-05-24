const express = require('express');
const {
  story, getStory, feed, filter,
} = require('./controllers');

const { uploadImg, multerUploads, cloudinaryConfig } = require('./middlewares/uploadImg');

const router = express.Router();

router.get('/posts/:id', getStory.getStory);
router.get('/archive/feed', feed.feed);
router.get('/filter', filter.filter);
router.post('/upload', [cloudinaryConfig, multerUploads, uploadImg]);
router.post('/posts/create', story.create);

module.exports = router;
