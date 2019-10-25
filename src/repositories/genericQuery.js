import { PostgresError } from 'infra/errors';
import { PostgresSQLService } from 'services';

const genericQuery = async ({ query = {}, values = [], returnFirst = false, returnResultArray = false }) => {
  try {
    const pool = PostgresSQLService.getPool();
    const result = await pool.query(query, values);

    if (returnFirst) {
      return result.rows[0];
    }

    if (returnResultArray) {
      return result.rows;
    }

    return result;
  } catch (e) {
    const options = {
      code: e.code,
      message: `${e.message} IN query: ${query.name}`,
      httpCode: 500,
      isOperational: true,
      name: 'PostgresError',
    };

    throw new PostgresError('Postgres Error', options);
  }
};

export default genericQuery;
