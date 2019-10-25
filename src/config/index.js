const {
  LOG,
  PORT = 8080,
  SECRET = 'apiSecret',
} = process.env;

const serverConfig = {
  log: LOG,
  port: PORT,
  secret: SECRET,
};

export { serverConfig };
