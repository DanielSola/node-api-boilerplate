import { genericHandler } from 'handlers';
import { blInsertEntity } from 'services';
import { entitySchema } from 'schemas';

const insertEntity = (req, res, next) => {
  const { body: entity } = req;

  genericHandler({
    blFunction: blInsertEntity,
    req,
    res,
    next,
    schema: entitySchema,
    body: entity,
  })({ entity });
};

export default insertEntity;
