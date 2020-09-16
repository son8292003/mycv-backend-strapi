module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('URL', 'https://code-4-food.life/resume/cms'),
  admin: {
    host: env('ADMIN_HOST', 'https://code-4-food.life/resume/cms'),
    auth: {
      secret: env('ADMIN_JWT_SECRET', '4466e4ef92e5471b3a9c07db2a67b7e2'),
    },
  },
});
