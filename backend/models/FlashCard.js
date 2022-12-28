const mongoose = require("mongoose");

const FlashCard = mongoose.model("FlashCard", {
  question: String,
  response: String,
  subject: Number,
});

module.exports = FlashCard;
