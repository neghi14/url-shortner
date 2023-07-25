import dotenv from "dotenv";

dotenv.config();

export default {
  env: "production",
  port: process.env.PORT,
  db: process.env.MONGO_URI,
};
