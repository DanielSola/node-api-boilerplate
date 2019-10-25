import { Pool } from 'pg';
import { logger } from 'services';
import { postgreSQLConfig } from 'config';

class PostgresSQLService {
  constructor() {
    logger.info('PostgresSQLService - constructor');
    this.pool = null;
  }

  getPool() {
    if (!this.pool) {
      this.pool = new Pool(postgreSQLConfig);
    }

    return this.pool;
  }
}

export default new PostgresSQLService();
