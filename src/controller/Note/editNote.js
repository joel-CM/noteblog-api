import NoteModel from "../../models/Note.model.js";
import pkg from "mongoose";
const { Types } = pkg;
const ObjecId = Types.ObjectId;

const editNote = async (req, res) => {
  const { id } = req.params;
  const title = req.body.title.trim();
  const description = req.body.description.trim();

  try {
    if (!title || !description) {
      return res.json({
        msg: "title and description are required",
        error: true,
      });
    }
    if (!ObjecId.isValid(id)) {
      return res.json({ msg: "invalid ObjectId", error: true });
    }
    const userId = req.token.id;
    const note = await NoteModel.findOne({ userId, _id: id });
    if (!note) {
      return res.json({
        msg: "Note not found",
        error: true,
      });
    }
    note.title = title;
    note.description = description;
    await note.save();
    return res.json({ msg: "updated note" });
  } catch (err) {
    console.log(err);
  }
};

export default editNote;
