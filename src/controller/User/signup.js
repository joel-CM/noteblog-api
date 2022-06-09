import UserModel from "../../models/User.model.js";

const signup = async (req, res) => {
  const user = req.body.user.trim();
  const password = req.body.password.trim();

  try {
    // validaar user y password
    if (user === "" || password === "") {
      return res.json({ msg: "user or password is empty", error: true });
    }
    const newUser = await UserModel.create({ user, password });
    res.json({ msg: "user created", error: false });
  } catch (err) {
    console.log(err);
  }
};

export default signup;
