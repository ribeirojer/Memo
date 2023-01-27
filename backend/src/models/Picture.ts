const mongoosez = require("mongoose");
const Schema = mongoosez.Schema;

const PictureSchema = new Schema({
  name: { type: String, required: true },
  src: { type: String, required: true },
});

module.exports = mongoosez.model("Picture", PictureSchema);