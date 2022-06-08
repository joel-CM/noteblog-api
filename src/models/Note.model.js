import pkg from "mongoose";
const { Schema, model } = pkg;

const Note = new Schema({
  userId: { type: String, required: true },
  title: { type: String, trim: true, required: true },
  description: { type: String, trim: true, required: true },
});

export default model("Note", Note);
