import NoteModel from "../../models/Note.model.js";
import pkg from "mongoose";
const { Types } = pkg;
const ObjecId = Types.ObjectId;

const note = async (req, res) => {
  const { id } = req.params;

  try {
    if (!ObjecId.isValid(id)) {
      return res.json({ msg: "invalid ObjectId", error: true });
    }
    const userId = req.token.id;
    const note = await NoteModel.findOne({ userId, _id: id });
    if (!note) return res.json({ msg: "note not found", error: true });
    return res.json(note);
  } catch (err) {
    console.log(err);
  }
};

export default note;
