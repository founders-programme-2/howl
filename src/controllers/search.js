const { Story } = require('../airtables');

let search = (searchQuery, cb) => {
  search = searchQuery.toLowerCase();
  const filteredData = [];

  /* Searches only in the details column, since we were unable to search across
  the entire airtable for now. */
  Story.select({
    filterByFormula: `FIND(LOWER("${search}"), LOWER(details)) > 0`,
    view: 'Approved Stories',
    fields: [
      'id',
      'title',
      'details',
      'year',
      'imageUrl',
      'imageCaption',
      'tags',
      'category',
      'location',
    ],
    sort: [
      {
        field: 'id',
        direction: 'desc',
      },
    ],
  }).eachPage(
    (records, fetchNextPage) => {
      // This function (`page`) will get called for each page of records.

      records.forEach((record) => {
        filteredData.push(record);
      });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
    },
    (err) => {
      if (err) {
        cb(err, null);
      } else {
        // Returns the result to the footerSearch middleware
        cb(null, filteredData);
      }
    },
  );
};

module.exports = { search };
