import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export default function verify(req, res) {
  const { token } = req.body;
  console.log(token);
  try {
    const verify = jwt.verify(
      token,
      process.env.JWT_SECRET,
      function (err, decoded) {
        if (err) {
          return { msg: "invalid or expired token", error: true };
        }
        return { msg: "verified token", error: false };
      }
    );
    res.json(verify);
  } catch (err) {
    console.log(err);
  }
}
