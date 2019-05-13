const { Story } = require('../airtables');

const create = (req, res) => {
  const {
    owner, title, body, date,
  } = req.body;

  Story.create({
    owner,
    title,
    body,
    date,
  }, (err) => {
    if (err) {
      res.json({ success: false, err: 'Saving data error' });
    } else {
      res.json({ success: true });
    }
  });
};

module.exports = { create };
