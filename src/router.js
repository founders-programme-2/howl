const express = require('express');

const router = express.Router();

router.get('/hey', (req, res) => {
  res.send('HEY GUYS, HOWL HERE');
});


module.exports = router;
