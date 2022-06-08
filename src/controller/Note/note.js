import NoteModel from "../../models/Note.model.js";

const note = async (req, res) => {
  const notes = await NoteModel.find({ userId: req.token.id });
  res.json(notes);
};

export default note;
