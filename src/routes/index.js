import { Router } from "express";
import UserRoute from "./User.route.js";
import NoteRoute from "./Note.route.js";

const app = Router();

app.use("/user", UserRoute);
app.use("/note", NoteRoute);

export default app;
