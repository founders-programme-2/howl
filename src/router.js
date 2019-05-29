const express = require('express');
const {
  story, getStory, feed, filter, search,
} = require('./controllers');

const { uploadImg, multerUploads, cloudinaryConfig } = require('./middlewares/uploadImg');

const router = express.Router();

router.get('/posts/:id', getStory.getStory);
router.get('/archive/feed', feed.feed);
router.post('/filter', filter.filter);
router.post('/upload', [cloudinaryConfig, multerUploads, uploadImg]);
router.post('/posts/create', story.create);
router.post('/search', search.search);

module.exports = router;
