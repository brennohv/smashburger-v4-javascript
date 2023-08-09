const axios = require('axios');
const vercelWebhook = strapi.config.get("custom.vercelWebhook");

module.exports = {
  async afterCreate(event) {
    vercelWebhook && await axios.default.post(vercelWebhook);
  },
  async afterUpdate(event) {
    vercelWebhook && axios.default.post(vercelWebhook);
  },
};
