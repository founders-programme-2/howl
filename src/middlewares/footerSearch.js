const { filter, search } = require('../controllers/');

const footerSearch = (req, res) => {
  const {
    category, location, year, tags, search: searchQuery,
  } = req.body;

  console.log('Category: ', category);
  console.log('Location: ', location);
  console.log('Year: ', year);
  console.log('Tags: ', tags);
  console.log('Search query: ', searchQuery);

  if (search !== '') {
    search.search(searchQuery, (err, result) => {
      if (err) {
        console.log('Error in search function: ', error);
      } else {
        res.json({ success: true, data: result });
      }
    });
  }
};

module.exports = { footerSearch };
