// config inicial
const express = require("express");
const router = express.Router();

// controller
const FlashCardController = require("../controller/flashcard.controller");

// rotas
router.post("/flashcard", FlashCardController.create);
router.get("/flashcard", FlashCardController.getAll);
router.get("/flashcard/:id", FlashCardController.getOne);
router.patch("/flashcard/:id", FlashCardController.update);
router.delete("/flashcard/:id", FlashCardController.delete);

module.exports = router;
