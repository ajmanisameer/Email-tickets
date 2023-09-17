"use strict";

module.exports = {
  async find(ctx) {
    try {
      return await strapi
        .plugin("ticket")
        .service("ticket")
        .find(ctx.query);
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async create(ctx) {
    try {
      ctx.body = await strapi
        .plugin("ticket")
        .service("ticket")
        .create(ctx.request.body);
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async respond(ctx) {
    try {
      ctx.body = await strapi
        .plugin("ticket")
        .service("ticket")
        .respond(ctx.params.id, ctx.request.body);
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async resolve(ctx) {
    try {
      ctx.body = await strapi
        .plugin("ticket")
        .service("ticket")
        .resolve(ctx.params.id, ctx.request.body);
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async spam(ctx) {
    try {
      ctx.body = await strapi
        .plugin("ticket")
        .service("ticket")
        .spam(ctx.params.id, ctx.request.body);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
  async read(ctx) {
    try {
      ctx.body = await strapi
        .plugin("ticket")
        .service("ticket")
        .read(ctx.params.id, ctx.request.body);
    } catch (err) {
      ctx.throw(500, err);
    }
  },


  async sendEmail(ctx) {
    try {
      ctx.body = await strapi
        .plugin("ticket")
        .service("ticket")
        .sendEmail(ctx.request.body);
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async receiveEmail(ctx) {
    try {
      ctx.body = await strapi
        .plugin("ticket")
        .service("ticket")
        .receiveEmail(ctx.request.body);
    } catch (err) {
      ctx.throw(500, err);
    }
  },



};
