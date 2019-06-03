const Airtable = require('airtable');
const env2 = require('env2');

env2('config.env');

const { AIRTABLE_API_KEY } = process.env;

/* istanbul ignore next */
if (!AIRTABLE_API_KEY) {
  throw new Error('Missing Airtable API KEY env var');
}

const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base('apppdW6Ebu2yFkm80');

module.exports = base('posts');
