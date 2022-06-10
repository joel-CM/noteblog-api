import NoteModel from "../../models/Note.model.js";

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
    const userId = req.token.id;
    await NoteModel.updateOne({ userId, _id: id }, { title, description });
    return res.json({ msg: "updated note" });
  } catch (err) {
    console.log(err);
  }
};

export default editNote;
