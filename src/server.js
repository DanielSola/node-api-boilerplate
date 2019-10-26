import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import routes from 'routes';
import { serverConfig } from 'config';
import { logger, Sentry } from 'services';
import { security } from 'middlewares';

const { log, port } = serverConfig;
const app = express();

app.use(bodyParser.json());

Object.keys(routes).forEach(key => {
  app.use(`/${key}`, security);
  app.use(`/${key}`, routes[key]);
});

if (log) {
  app.use(morgan('combined'));
}

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/ping', (req, res) => {
  res.send('pong');
});

const start = async () => {
  app.listen(port, () => {
    logger.info('Starting API REST on port', port);
  });
};

export { start, app };
