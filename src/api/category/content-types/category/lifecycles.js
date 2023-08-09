const axios = require('axios');

module.exports = {
  afterCreate(event) {
    axios.default.post("https://api.vercel.com/v1/integrations/deploy/prj_geZkijBwnAOeLd7pxyl6v2BIvnuF/MVNGIPvW2F");
  },
  afterUpdate(event) {
     axios.default.post("https://api.vercel.com/v1/integrations/deploy/prj_geZkijBwnAOeLd7pxyl6v2BIvnuF/MVNGIPvW2F");
  },
};
