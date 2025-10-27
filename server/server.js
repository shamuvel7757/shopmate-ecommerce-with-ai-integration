// import { config } from "dotenv";
import app from "./app.js";
import { v2 as cloudinary } from "cloudinary";
import { connectDB } from "./database/db.js";

// config({ path: "./config/config.env" });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
