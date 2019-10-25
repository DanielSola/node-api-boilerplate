import { InvalidToken as error } from 'errorcodes';
import moment from 'moment';
import CacheService from 'services/CacheService';
import jwt from 'jsonwebtoken';
import { SECRET } from 'config';

const session = async (req, res, next) => {
  const authToken = req.header('Token');

  try {
    const { id, token } = jwt.verify(authToken, SECRET);

    if (id && token) {
      const keyRedis = `catalogadmin#session#${id}#${token}`;
      const data = await CacheService.getElement({ key: keyRedis });

      req.session = data;

      if (!req.session || moment().diff(req.session.expiryDate) > 0) {
        res.status(error.code).send(error.message);
      } else {
        next();
      }
    }
  } catch(err) {
    res.status(error.httpCode).send(error.message);
  }
};

export default session;
