import NoteModel from "../../models/Note.model.js";

const deleteNote = async (req, res) => {
  const { id } = req.params;

  try {
    const userId = req.token.id;
    const note = await NoteModel.findOneAndDelete({ userId, _id: id });
    return res.json({ msg: "deleted note" });
  } catch (err) {
    console.log(err);
  }
};

export default deleteNote;
