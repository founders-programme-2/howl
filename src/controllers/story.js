const { Story } = require('../airtables');

const create = (req, res) => {
  const {
    tags,
    category,
    name,
    email,
    phone,
    location,
    year,
    month,
    title,
    details,
    imageCap,
    imgLink,
    wlmConnection,
  } = req.body;


  Story.create({
    name,
    email,
    phoneNumber: phone,
    title,
    location,
    year,
    month,
    details,
    imageUrl: imgLink,
    imageCaption: imageCap,
    connectionToWlm: wlmConnection,
    tags,
    category,
  }, { typecast: true }, (err) => {
    if (err) {
      res.json({ success: false, err: 'There\'s been an error in saving the data to Airtable' });
    } else {
      res.json({ success: true });
    }
  });
};

module.exports = { create };
