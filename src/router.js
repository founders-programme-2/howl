const express = require('express');

const router = express.Router();

router.get('/hey', (req, res) => {
  res.send('HEY GUYS, HOWL HERE');
});

router.post('/posts/create', require('./controllers/story').create);

module.exports = router;
