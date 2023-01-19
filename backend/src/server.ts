const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose')
const app = express();

// Routes
import UserRoutes from "./routes/UserRoutes";
import CardRoutes from "./routes/CardRoutes";

// Config JSON response
app.use(express.json());

// Solve CORS
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use("/", UserRoutes);
app.use("/", CardRoutes);

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
  .catch((err: any) => console.log(err));
