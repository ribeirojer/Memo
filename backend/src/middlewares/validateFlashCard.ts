export function validateFlashCard(req, res, next) {
  const { question, response, subject } = req.body;

  if (!question) {
    return res.status(422).json({ msg: "O question é obrigatório!" });
  }

  if (!response) {
    return res.status(422).json({ msg: "A response é obrigatório!" });
  }

  if (!subject) {
    return res.status(422).json({ msg: "O subject é obrigatória!" });
  }

  next();
}
