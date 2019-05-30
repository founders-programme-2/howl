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

  if (searchQuery !== '') {
    search.search(searchQuery, (err, result) => {
      if (err) {
        console.log('Error in search function: ', err);
      } else {
        res.json({ success: true, data: result });
      }
    });
  }

  if (category || location || year || tags) {
    const filterVar = {
      category,
      location,
      year,
      tags,
    };
    filter.filter(filterVar, (err, result) => {
      if (err) {
        console.log('Error in search function: ', err);
      } else {
        res.json({ success: true, data: result });
      }
    });
  }
};

module.exports = { footerSearch };
