import { Client } from "pg";

const database = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

console.log("sam 1");

// export const connectDB = async () => {
//   try {
//     await database.connect();
//     console.log("sam j");
//     console.log("Connected to Database successfully");
//   } catch (error) {
//     console.error("shamuvel - Database Connection Failed", error);
//     process.exit(1);
//   }
// };
try {
  await database.connect();
  console.log("sam j");
  console.log("Connected to Database successfully");
} catch (error) {
  console.error("shamuvel - Database Connection Failed", error);
  process.exit(1);
}

export default database;
