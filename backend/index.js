// config inicial
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// Solve CORS
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Config JSON response
app.use(express.json());

const CardRoutes = require("./routes/CardRoutes");
const UserRoutes = require("./routes/UserRoutes");

app.use("/", CardRoutes);
app.use("/", UserRoutes);

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

module.exports = { app };
