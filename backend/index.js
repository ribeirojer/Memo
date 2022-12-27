// config inicial
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
const data = require("./data.json");

// depois do db
const mongoose = require("mongoose");
const FlashCard = require("./models/FlashCard");

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// rotas
app.post("/flashcard", async (req, res) => {
  const { question, response } = req.body;

  const card = {
    question,
    response,
  };
  try {
    await FlashCard.create(card);

    res
      .status(201)
      .json({ message: "FlashCard inserido no sistema com sucesso!" });
  } catch (error) {
    res.status(500).json({ erro: error });
  }
});

app.get("/person", async (req, res) => {
  try {
    const people = await Person.find();

    res.status(200).json(people);
  } catch (error) {
    res.status(500).json({ erro: error });
  }
});

app.get("/person/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const person = await Person.findOne({ _id: id });

    if (!person) {
      res.status(422).json({ message: "Usuário não encontrado!" });
      return;
    }

    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ erro: error });
  }
});

app.patch("/person/:id", async (req, res) => {
  const id = req.params.id;

  const { name, salary, approved } = req.body;

  const person = {
    name,
    salary,
    approved,
  };

  try {
    const updatedPerson = await Person.updateOne({ _id: id }, person);

    if (updatedPerson.matchedCount === 0) {
      res.status(422).json({ message: "Usuário não encontrado!" });
      return;
    }

    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ erro: error });
  }
});

app.delete("/person/:id", async (req, res) => {
  const id = req.params.id;

  const person = await Person.findOne({ _id: id });

  if (!person) {
    res.status(422).json({ message: "Usuário não encontrado!" });
    return;
  }

  try {
    await Person.deleteOne({ _id: id });

    res.status(200).json({ message: "Usuário removido com sucesso!" });
  } catch (error) {
    res.status(500).json({ erro: error });
  }
});

app.get("/", (req, res) => {
  return res.json(data);
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
