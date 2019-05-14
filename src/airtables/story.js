import Airtable from 'airtable';
import env2 from 'env2';

env2('config.env');

const { AIRTABLE_API_KEY } = process.env;

if (!AIRTABLE_API_KEY) {
  throw new Error('Missing Airtable API KEY env var');
}

const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base('apppdW6Ebu2yFkm80');

export default base('posts');
