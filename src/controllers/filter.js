const { Story } = require('../airtables');

const filter = (filterVar, cb) => {
  console.log('filterVar is: ', filterVar);

  // creates a formula that airtable uses to filter response
  // this string is the first part of the command that airtable api calls for
  let formula = '(AND(';

  // dynamically generates the fields that airtable needs to filter response data
  const formulaFields = {
    category: `{category} = "${filterVar.category}", `,
    location: `{location} = "${filterVar.location}", `,
    year: `{year} = "${filterVar.year}", `,
  };

  // The request body comes in with keys for all fields. If the user has not selected a filter,
  // it comes in as undefined. This function checks for truthy keys in request body. For each key,
  // it adds the corresponding string from formulaFields to formula
  // Object.keys(filterVar).forEach((key) => {
  //   console.log('Type of key: ', typeof key);
  //   console.log('key', key);
  //   if (key && key !== 'tags') formula += `${formulaFields[key]}`;
  // });

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(filterVar)) {
    if (value && key !== 'tags') {
      formula += `${formulaFields[key]}`;
    }
  }

  // removes a danging space and apostrophe from formula and adds '))' to complete the formula string.
  formula = `${formula.substring(0, formula.length - 2)}))`;

  console.log('Formula is: ', formula);

  const filteredData = [];
  Story.select({
    filterByFormula: formula,
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

      // This function loops through each incoming Airtable entry (already filtered by the airtable search formula
      // for year, location & category). If tags is not undefined in the footer request, we loop
      // through the array of tags in the search and check if any of the incoming Airtable entries match
      // for any of the tag search queries. If there are any matches & if the record is not already in
      // the filtered data, we push that entry to our response (filteredData)
      records.forEach((record) => {
        if (filterVar.tags.length !== 0) {
          filterVar.tags.forEach((el) => {
            if (record.fields.tags.includes(el) && !filteredData.includes(record)) {
              filteredData.push(record);
            }
          });
        } else {
          filteredData.push(record);
        }
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
        // console.log('successful result: ', filteredData);
        cb(null, filteredData);
      }
    },
  );
};

module.exports = { filter };
