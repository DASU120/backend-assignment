// db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: "postgres",
  host: 'localhost',
  database: 'socialmedia_db',
  password: 'Vdasu6300@',
  port: 5432,
});

module.exports = pool;
