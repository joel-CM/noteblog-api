import UserModel from "../../models/User.model.js";

const signup = async (req, res) => {
  const { user, password } = req.body;

  try {
    // validaar user y password
    if (user === "" || password === "") {
      return res.json({ msg: "user or password is empty" });
    }
    const newUser = await UserModel.create({ user, password });
    res.json({ msg: "user created" });
  } catch (err) {
    console.log(err);
  }
};

export default signup;
