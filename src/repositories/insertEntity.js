import { genericQuery } from 'infra/repositories';

const insertEntityQuery = {
  text: `
  INSERT INTO
    entity
  (
    id,
    message,
    created_at
  )
  VALUES ($1, $2, NOW())
  `,
};

const insertEntity = async ({ id, message }) => {
  const values = [id, message];

  return genericQuery({ query: insertEntityQuery, values });
};

export default insertEntity;
