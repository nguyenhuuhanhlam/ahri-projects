module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '48d1a175f04ed35ed522004ee9544763'),
  },
});
