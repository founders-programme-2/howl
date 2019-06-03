const express = require('express');
const { story, getStory, feed } = require('./controllers');

const { uploadImg, multerUploads, cloudinaryConfig } = require('./middlewares/uploadImg');
const { footerSearch } = require('./middlewares/footerSearch');

const router = express.Router();

router.get('/posts/:id', getStory.getStory);
router.get('/archive/feed', feed.feed);
router.post('/upload', [cloudinaryConfig, multerUploads, uploadImg]);
router.post('/posts/create', story.create);
router.post('/search', footerSearch);

module.exports = router;
