const mongoosee = require('mongoose')

const FlashCard = mongoosee.model("FlashCard", {
  question: String,
  response: String,
  subject: Number,
});

module.exports = FlashCard;
