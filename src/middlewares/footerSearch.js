const { filter, search } = require('../controllers/');

// middleware function designed to handle different airtable calls
const footerSearch = (req, res) => {
  const {
    category, location, year, tags, search: searchQuery,
  } = req.body;

  /* NOTE: Currently, this will only search for EITHER a search query,
  OR category/location/year/tags */

  // makes a call to airtable to search the details column, and returns to frontend
  if (searchQuery !== '') {
    search.search(searchQuery, (err, result) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log('Error in search function: ', err);
      } else {
        res.json({ success: true, data: result });
      }
    });
    // makes a call to airtable to search for other queries and returns to fe
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
