import { Router } from "express";
import note from "../controller/Note/note.js";
import create from "../controller/Note/create.js";
import auth from "../middlewares/auth.js";

const route = Router();

route.get("/", auth, note);
route.post("/create", auth, create);

export default route;
