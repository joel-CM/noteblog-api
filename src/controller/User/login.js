import UserModel from "../../models/User.model.js";
import bcrypt from "bcrypt";
import { createToken } from "../../jwt/jwt.js";

const login = async (req, res) => {
  const { user, password } = req.body;

  try {
    const findUser = await UserModel.findOne({ user });
    if (!findUser) return res.json({ msg: "user or password invalid" });
    const isValid = bcrypt.compareSync(password, findUser.password);
    if (!isValid) return res.json({ msg: "user or password invalid" });
    const token = createToken({ id: findUser._id, user: findUser.user });
    res.json({ token });
  } catch (err) {
    console.log(err);
  }
};

export default login;
