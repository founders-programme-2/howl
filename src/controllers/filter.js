const { Story } = require('../airtables');

const filter = (req, res) => {
  const {
    category, location, year, tags, search,
  } = req.body;

  console.log('Category: ', category);
  console.log('Location: ', location);
  console.log('Year: ', year);
  console.log('Tags: ', tags[0]);
  console.log('Search: ', search);

  // creates a formula that airtable uses to filter response
  // this string is the first part of the command that airtable api calls for
  let formula = '(AND(';

  // let tagString = '{tags} = ';
  // if (tags) {
  //   tags.map((tag) => {
  //     if (tags[0]) {
  //       tagString += `"${tag}, `;
  //     } else if (tags[tags.length - 1]) {
  //       tagString += `${tag}"`;
  //     } else {
  //       tagString += `${tag}, `;
  //     }
  //   });
  // }
  // console.log('after tags', tagString);

  // dynamically generates the fields that airtable needs to filter response data
  const formulaFields = {
    category: `{category} = "${category}", `,
    location: `{location} = "${location}", `,
    year: `{year} = "${year}", `,
    // tags: tagString,
  };

  // The request body comes in with keys for all fields. If the user has not selected a filter,
  // it comes in as undefined. This function checks for truthy keys in request body. For each key,
  // it adds the corresponding string from formulaFields to formula
  Object.keys(req.body).forEach((key) => {
    if (key && key !== 'search' && key !== 'tags') formula += `${formulaFields[key]}`;
  });

  // removes a danging space and apostrophe from formula and adds '))' to complete the formula string.
  formula = `${formula.substring(0, formula.length - 2)}))`;

  console.log(formula, 'TOTAL FORMULA');
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

      records.forEach((record) => {
        if (tags) {
          // console.log('THESE ARE THE INCOMING TAGS', record.fields.tags);
          console.log('these are the tags', tags);
          tags.forEach((el) => {
            if (record.fields.tags.includes(el)) {
              // console.log(`${record.fields.tags} includes ${el}`);
              if (!filteredData.includes(record)) {
                filteredData.push(record);
              }
            }
          });
          // if (record.fields.tags == )
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
        res.json({ success: false, err: "There's been an error in fetching your search." });
      } else {
        console.log('succesful result: ', filteredData);
        res.json({ success: true, data: filteredData });
      }
    },
  );
};

module.exports = { filter };
