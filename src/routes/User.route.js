import { Router } from "express";
import signup from "../controller/User/signup.js";
import login from "../controller/User/login.js";

const route = Router();

route.post("/signup", signup);
route.post("/login", login);

export default route;
