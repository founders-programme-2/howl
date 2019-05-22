const { Story } = require('../airtables');

const feed = (req, res) => {
  const { title, details } = req.body;
  const storyTitles = [];
  Story.select({
    maxRecords: 10,
    view: 'Grid view',
  }).eachPage(
    (records, fetchNextPage) => {
      // This function (`page`) will get called for each page of records.

      records.forEach((record) => {
        storyTitles.push(record.fields.title);
      });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
    },
    (err) => {
      if (err) {
        res.json({ success: false, err: "There's been an error in fetching the Archive feed." });
      } else {
        res.json({ success: true, data: storyTitles });
      }
    },
  );
};

module.exports = { feed };
