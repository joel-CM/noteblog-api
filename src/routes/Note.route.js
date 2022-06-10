import { Router } from "express";
import notes from "../controller/Note/notes.js";
import note from "../controller/Note/note.js";
import editNote from "../controller/Note/editNote.js";
import deleteNote from "../controller/Note/deleteNote.js";
import create from "../controller/Note/create.js";
import auth from "../middlewares/auth.js";

const route = Router();

route.get("/", auth, notes);
route.get("/:id", auth, note);
route.put("/:id", auth, editNote);
route.delete("/:id", auth, deleteNote);
route.post("/create", auth, create);

export default route;
