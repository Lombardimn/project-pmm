import { createPool } from 'mysql2/promise'
import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_PRODUCT_DATABASE } from '../../../gateway/config.js'

export const pool = createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_PRODUCT_DATABASE
})
