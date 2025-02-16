module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('NODE_ENV') === 'production' ? env('RENDER_EXTERNAL_URL', 'https://backend-with-strapi-prjd.onrender.com') : '',
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
