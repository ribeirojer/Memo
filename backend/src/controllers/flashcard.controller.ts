const FlashCardModel = require("../models/FlashCard");

export class FlashCardController {
  static async create(req, res): Promise<void> {
    const { question, response, subject } = req.body;

    const card = {
      question,
      response,
      subject,
    };

    try {
      await FlashCardModel.create(card);
      res
        .status(201)
        .json({ message: "FlashCard inserida no sistema com sucesso!" });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async getAll(req, res): Promise<void> {
    try {
      const cards = await FlashCardModel.find();
      res.status(200).json(cards);
    } catch (error) {
      res.status(500).json({ erro: error });
    }
  }

  static async getBySubject(req, res): Promise<void> {
    const subject = req.params.subject;
    try {
      const card = await FlashCardModel.find({ subject: subject });
      if (!card) {
        res.status(422).json({ message: "FlashCard não encontrado!" });
        return;
      }
      res.status(200).json(card);
    } catch (error) {
      res.status(500).json({ erro: error });
    }
  }

  static async update(req, res): Promise<void> {
    const id = req.params.id;

    const { question, response, subject } = req.body;

    const card = {
      question,
      response,
      subject,
    };

    try {
      const updatedCard = await FlashCardModel.updateOne({ _id: id }, card);
      if (updatedCard.matchedCount === 0) {
        res.status(422).json({ message: "FlashCard não encontrado!" });
        return;
      }
      res.status(200).json(card);
    } catch (error) {
      res.status(500).json({ erro: error });
    }
  }

  static async delete(req, res): Promise<void> {
    const id = req.params.id;

    const card = await FlashCardModel.findOne({ _id: id });

    if (!card) {
      res.status(422).json({ message: "FlashCard não encontrado!" });
      return;
    }

    try {
      await FlashCardModel.deleteOne({ _id: id });

      res.status(200).json({ message: "FlashCard removido com sucesso!" });
    } catch (error) {
      res.status(500).json({ erro: error });
    }
  }
}
