// config inicial
require("dotenv").config();
const router = require("express").Router();
import FlashCardController from '../controller/flashcard.controller';

// depois do db
const mongoose = require("mongoose");
const FlashCard = require("../models/FlashCard");

// rotas
router.post("/flashcard", FlashCardController.create);

router.get("/flashcard", async (req, res) => {
  try {
    const cards = await FlashCard.find();

    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ erro: error });
  }
});

router.get("/flashcard/:id", async (req, res) => {
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
});

router.patch("/flashcard/:id", async (req, res) => {
  const id = req.params.id;

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
});

router.delete("/flashcard/:id", async (req, res) => {
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
});

router.get("/", (req, res) => {
  return res.json({ data: "rota pública" });
});

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.cdyo6kz.mongodb.net/banco1?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Conectou ao banco!");
    app.listen(3000, () => {
      console.log("o servidor está funcionando...");
    });
  })
  .catch((err) => console.log(err));
