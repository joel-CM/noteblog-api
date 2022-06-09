import NoteModel from "../../models/Note.model.js";

const create = async (req, res) => {
  const title = req.body.title.trim();
  const description = req.body.description.trim();

  try {
    if (!title || !description) {
      return res.json({
        msg: "title and description are required",
        error: true,
      });
    }
    await NoteModel.create({ userId: req.token.id, ...req.body });
    res.json({ msg: "note create", note: { ...req.body } });
  } catch (err) {
    console.log(err);
  }
};

export default create;
