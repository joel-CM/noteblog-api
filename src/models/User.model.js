import pkg from "mongoose";
const { Schema, model } = pkg;
import bcrypt from "bcrypt";

const User = new Schema({
  user: { type: String, trim: true, required: true },
  password: { type: String, trim: true, required: true },
});

// hash password
User.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  user.password = bcrypt.hashSync(user.password, 10);
  next();
});

export default model("User", User);
