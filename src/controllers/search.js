const { Story } = require('../airtables');

const search = (req, res) => {
  const filteredData = [];
  Story.select({
    // filterByFormula: ,
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
        console.log('Retrieved', record.get('id'));
        filteredData.push(record);
      });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
    },
    (err) => {
      if (err) {
        res.json({ success: false, err: "There's been an error in fetching your search." });
      } else {
        console.log('successful result: ', filteredData);
        res.json({ success: true, data: filteredData });
      }
    },
  );
};

module.exports = { search };
