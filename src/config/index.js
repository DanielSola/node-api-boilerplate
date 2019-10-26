const {
  LOG,
  PORT = 80,
  SECRET = 'apiSecret',
} = process.env;

const serverConfig = {
  log: LOG,
  port: PORT,
  secret: SECRET,
};

export { serverConfig };
