const { app } = require("./app");
const mongooses = require("mongoose");

mongooses.set("strictQuery", true);

const PORT = process.env.PORT || 3000;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

mongooses
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.cdyo6kz.mongodb.net/banco1?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Conectou ao banco!");
    app.listen(PORT, () => {
      console.log("o servidor está funcionando...");
    });
  })
  .catch((err: any) => console.log(err));
