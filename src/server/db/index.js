import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
const { Pool } = pg;

// Configure PostgreSQL connection
const pool = new Pool({
  host: '5.75.154.79',
  port: 5000,
  user: 'postgres',
  password: 'Jk5hrSHQ85P6uDnpYaWbwvWPuhVOVjK4bhLkZ5t9jtOYz0fXD7PsgSc8GDauEvVj',
  database: 'postgres',
  ssl: {
    rejectUnauthorized: false
  }
});

// Test the connection
pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

export const db = drizzle(pool);