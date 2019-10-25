import Joi from '@hapi/joi';
import { BadRequestError } from 'errors';

const validate = async ({ body, schema }) => {
  try {
    await Joi.validate(body, schema, { allowUnknown: true });
  } catch (e) {
    const { details } = e;

    throw new BadRequestError('Validation error', { details });
  }
};

const genericHandler = ({ blFunction, res, req, httpCode = 200, next, schema = {}, body = req.body }) => {
  return async (...args) => {
    try {
      await validate({ body, schema });
      const result = await blFunction(...args);

      res.status(httpCode).json(result);
    } catch (e) {
      req._params = req.params;

      next(e);
    }
  };
};

export default genericHandler;
