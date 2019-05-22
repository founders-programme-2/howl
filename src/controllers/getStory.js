const { Story } = require('../airtables');

const getStory = (req, res) => {
  const { id } = req.params;
  Story.find(`${id}`, (err, record) => {
    if (err) { res.json({ success: false, message: err.message }); return; }
    res.json({ success: true, data: record._rawJson.fields });
  });
};

module.exports = { getStory };
