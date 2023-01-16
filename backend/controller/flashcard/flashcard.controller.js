const FlashCard = require("../../models/FlashCard");
const validateFlashCard = require("./validateflashcard");

class FlashCardController {
  async create(req, res) {
    // Validate data
    const errors = validateFlashCard(req.body);
    if (errors) {
      res.status(400).json({ errors });
      return;
    }

    const { question, response, subject } = req.body;

    const card = {
      question,
      response,
      subject,
    };

    try {
      await FlashCard.create(card);
      res
        .status(201)
        .json({ message: "FlashCard inserida no sistema com sucesso!" });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async getAll(req, res) {
    try {
      const cards = await FlashCard.find();
      res.status(200).json(cards);
    } catch (error) {
      res.status(500).json({ erro: error });
    }
  }

  async getOne(req, res) {
    const id = req.params.id;
    try {
      const card = await FlashCard.findOne({ _id: id });
      if (!card) {
        res.status(422).json({ message: "FlashCard não encontrado!" });
        return;
      }
      res.status(200).json(card);
    } catch (error) {
      res.status(500).json({ erro: error });
    }
  }

  async update(req, res) {
    const id = req.params.id;

    // Validate data
    const errors = validateFlashCard(req.body);
    if (errors) {
      res.status(400).json({ errors });
      return;
    }

    const { question, response, subject } = req.body;

    const card = {
      question,
      response,
      subject,
    };

    try {
      const updatedCard = await FlashCard.updateOne({ _id: id }, card);
      if (updatedCard.matchedCount === 0) {
        res.status(422).json({ message: "FlashCard não encontrado!" });
        return;
      }
      res.status(200).json(card);
    } catch (error) {
      res.status(500).json({ erro: error });
    }
  }

  async delete(req, res) {
    const id = req.params.id;

    const card = await FlashCard.findOne({ _id: id });

    if (!card) {
      res.status(422).json({ message: "FlashCard não encontrado!" });
      return;
    }

    try {
      await FlashCard.deleteOne({ _id: id });

      res.status(200).json({ message: "FlashCard removido com sucesso!" });
    } catch (error) {
      res.status(500).json({ erro: error });
    }
  }
}

module.exports = new FlashCardController();
