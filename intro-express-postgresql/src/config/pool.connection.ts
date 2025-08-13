import { Pool } from 'pg';
import { DATABASE_USER, DATABASE_HOST, DATABASE_PORT, DATABASE_NAME, DATABASE_PASSWORD } from './config';

const pool = new Pool({
  user: DATABASE_USER,
  host: DATABASE_HOST,
  port: Number(DATABASE_PORT),
  database: DATABASE_NAME,
  password: DATABASE_PASSWORD,
});

export default pool;
