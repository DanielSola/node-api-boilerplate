import { serverConfig } from 'config';

const security = (req, res, next) => {
  const { secret } = serverConfig;

  if (req.header('x-auth-secret') === secret && req.method !== 'OPTIONS') {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

export default security;
