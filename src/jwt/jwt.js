import jwt from "jsonwebtoken";

export function createToken(payload) {
  return jwt.sign(payload, "note_blog", { expiresIn: "7d" });
}

export function verify(token) {
  let data = null;
  jwt.verify(token, "note_blog", function (err, decoded) {
    if (err) return false;
    data = decoded;
  });
  return data;
}
