import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'catalog_db',
  password: "12345",
  port: 5432,
});

export default pool;