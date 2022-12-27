const mongoose = require("mongoose");

const FlashCard = mongoose.model("FlashCard", {
  question: String,
  response: String,
});

module.exports = FlashCard;