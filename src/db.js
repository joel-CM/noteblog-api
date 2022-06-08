import mongoose from "mongoose";

const db = mongoose
  .connect("mongodb://localhost/note_blog")
  .then((db) => {
    console.log("db conected");
  })
  .catch((err) => {
    console.log(err);
  });

export default db;
