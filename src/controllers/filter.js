const { Story } = require('../airtables');

const filter = (req, res) => {
  const {
    category, location, tags, search,
  } = req.body;

  const filteredData = [];
  Story.select({
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
      // This function will get called for each page of records.

      records.forEach((record) => {
        filteredData.push(record);

        // // RESPONSE VARIABLES
        // const { category, year, location } = record.fields;

        // // THIS FILTER IS FOR REQUIRED FORM PARAMS
        // if (reqCategory == category && reqYear == year && reqLocation == location) {
        //   filteredData.push(record);
        // }

        // // THIS FILTER IS FOR CONDITIONAL FORM PARAMS
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
        res.json({ success: true, data: filteredData });
      }
    },
  );
};

module.exports = { filter };
