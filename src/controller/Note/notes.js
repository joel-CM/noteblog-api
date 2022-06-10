import NoteModel from "../../models/Note.model.js";

const notes = async (req, res) => {
  try {
    const notes = await NoteModel.find({ userId: req.token.id });
    res.json(notes);
  } catch (err) {
    console.log(err);
  }
};

export default notes;
