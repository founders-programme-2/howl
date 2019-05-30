const { filter, search } = require('../controllers/');

const footerSearch = (req, res) => {
  const {
    category, location, year, tags, search: searchQuery,
  } = req.body;

  if (searchQuery !== '') {
    search.search(searchQuery, (err, result) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log('Error in search function: ', err);
      } else {
        res.json({ success: true, data: result });
      }
    });
  } else if (category || location || year || tags) {
    const filterVar = {
      category,
      location,
      year,
      tags,
    };
    filter.filter(filterVar, (err, result) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log('Error in filter function: ', err);
      } else {
        res.json({ success: true, data: result });
      }
    });
  }
};

module.exports = { footerSearch };
