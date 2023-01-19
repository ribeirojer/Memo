import { FlashCardController } from "controllers/flashcard.controller";

// config inicial
require("dotenv").config();
const express = require("express");
const router = express.Router();

// rotas
router.post("/flashcard", FlashCardController.create);
router.get("/flashcard", FlashCardController.getAll);
router.get("/flashcard/:id", FlashCardController.getOne);
router.patch("/flashcard/:id", FlashCardController.update);
router.delete("/flashcard/:id", FlashCardController.delete);

export default router;
