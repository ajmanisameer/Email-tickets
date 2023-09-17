'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('ticket')
      .service('myService')
      .getWelcomeMessage();
  },
});
