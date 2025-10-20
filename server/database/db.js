import pkg from "pg";
const { Client } = pkg;

const database = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  host: process.env.DB_NAME,
  host: process.env.DB_PASSWORD,
  host: process.env.DB_PORT,
});
