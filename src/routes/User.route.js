import { Router } from "express";
import signup from "../controller/User/signup.js";
import login from "../controller/User/login.js";
import verify from "../controller/User/verify.js";

const route = Router();

route.post("/signup", signup);
route.post("/login", login);
route.post("/verify", verify);

export default route;
