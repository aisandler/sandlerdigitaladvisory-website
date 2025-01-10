const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'sandlerdigitaladvisory-website-main',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

