// config inicial
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// models
const User = require("./models/User");
const FlashCard = require("./models/FlashCard");

// Solve CORS
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Config JSON response
app.use(express.json());

function checkToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ msg: "Acesso negado!" });

  try {
    const secret = process.env.SECRET;

    jwt.verify(token, secret);

    next();
  } catch (err) {
    res.status(400).json({ msg: "O Token é inválido!" });
  }
}

// Private Route
app.get("/user/:id", checkToken, async (req, res) => {
  const id = req.params.id;
  console.log(id);
  // check if user exists
  const user = await User.findById(id, "-password");

  if (!user) {
    return res.status(404).json({ msg: "Usuário não encontrado!" });
  }

  res.status(200).json({ user });
});

app.post("/auth/register", async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  // validations
  if (!name) {
    return res.status(422).json({ msg: "O nome é obrigatório!" });
  }

  if (!email) {
    return res.status(422).json({ msg: "O email é obrigatório!" });
  }

  if (!password) {
    return res.status(422).json({ msg: "A senha é obrigatória!" });
  }

  if (password !== confirmPassword) {
    return res
      .status(422)
      .json({ msg: "A senha e a confirmação precisam ser iguais!" });
  }

  // check if user exists
  const userExists = await User.findOne({ email: email });

  if (userExists) {
    return res.status(422).json({ msg: "Por favor, utilize outro e-mail!" });
  }

  // create password
  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);

  // create user
  const user = new User({
    name,
    email,
    password: passwordHash
  });

  try {
    await user.save();

    res.status(201).json({ msg: "Usuário criado com sucesso!" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

app.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;

  // validations
  if (!email) {
    return res.status(422).json({ msg: "O email é obrigatório!" });
  }

  if (!password) {
    return res.status(422).json({ msg: "A senha é obrigatória!" });
  }

  // check if user exists
  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(404).json({ msg: "Usuário não encontrado!" });
  }
  // check if password match
  const checkPassword = await bcrypt.compare(password, user.password);

  if (!checkPassword) {
    return res.status(422).json({ msg: "Senha inválida" });
  }

  try {
    const secret = process.env.SECRET;

    const token = jwt.sign(
      {
        id: user._id,
      },
      secret
    );

    res.status(200).json({ msg: "Autenticação realizada com sucesso!", token });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

// rotas
app.post("/flashcard", async (req, res) => {
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
      .json({ message: "FlashCard inserido no sistema com sucesso!" });
  } catch (error) {
    res.status(500).json({ erro: error });
  }
});

app.get("/flashcard", async (req, res) => {
  try {
    const cards = await FlashCard.find();

    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ erro: error });
  }
});

app.get("/flashcard/:id", async (req, res) => {
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

app.patch("/flashcard/:id", async (req, res) => {
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

app.delete("/flashcard/:id", async (req, res) => {
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

app.get("/", (req, res) => {
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
