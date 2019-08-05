require('dotenv').config();
const SCHEMA_PATH = process.env.SCHEMA_PATH || './data/schema.graphql';

module.exports = {
  client: {
    includes: ['./src/components/**/*.ts'],
    service: {
      name: 'artsy-metaphysics-v2',
      localSchemaFile: SCHEMA_PATH,
    },
  },
};
