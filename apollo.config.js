require('dotenv').config();
const SCHEMA_PATH = process.env.SCHEMA_PATH || './data/schemaV2.graphql';

module.exports = {
  client: {
    service: {
      name: 'artsy-metaphysics-v2',
      localSchemaFile: SCHEMA_PATH,
    },
  },
};
