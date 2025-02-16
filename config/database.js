const path = require('path');

module.exports = ({ env }) => {
  const isProduction = env('NODE_ENV') === 'production';

  const connections = {
    sqlite: {
      connection: {
        filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    },
    postgres: {
      connection: {
        connectionString: env('DATABASE_URL'),
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: { rejectUnauthorized: false },
        schema: env('DATABASE_SCHEMA', 'public'),
        debug: false,
      },
      pool: { min: 2, max: 10 },
    },
  };

  return {
    connection: {
      client: isProduction ? 'postgres' : 'sqlite',
      ...connections[isProduction ? 'postgres' : 'sqlite'],
    },
  };
};
