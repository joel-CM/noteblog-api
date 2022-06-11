import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const db = mongoose
  .connect(process.env.MONGO_URL)
  .then((db) => {
    console.log("db conected");
  })
  .catch((err) => {
    console.log(err);
  });

export default db;
