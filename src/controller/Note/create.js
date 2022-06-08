import NoteModel from "../../models/Note.model.js";

const create = async (req, res) => {
  try {
    await NoteModel.create({ userId: req.token.id, ...req.body });
    res.json({ msg: "note create", note: { ...req.body } });
  } catch (err) {
    console.log(err);
  }
};

export default create;
