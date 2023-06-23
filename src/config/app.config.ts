export const EnvConfig = () => {
  return {
    environment: process.env.NODE_ENV || 'dev',
    mongoDB: process.env.MONGODB_URI,
    port: process.env.PORT || 3001,
    defaultLimit: +process.env.DEFAULT_LIMIT || 7,
  };
};
