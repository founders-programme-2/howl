const { Story } = require('../airtables');

const getStory = (req, res) => {
  const { id } = req.params;
  const allowedFields = ['title', 'details', 'month', 'year', 'imageUrl', 'imageCaption', 'tags', 'category', 'status'];

  Story.find(`${id}`, (err, record) => {
    if (err) { res.json({ success: false, message: err.message }); return; }
    // eslint-disable-next-line no-underscore-dangle
    const rawObj = record._rawJson.fields;
    const allowedObj = allowedFields.reduce((result, ele) => {
      // eslint-disable-next-line no-param-reassign
      result[ele] = rawObj[ele];
      return result;
    }, {});
    res.json({ success: true, data: allowedObj });
  });
};

module.exports = { getStory };
