import { FlashCardController } from "controllers/flashcard.controller";
import { validateFlashCard } from "middlewares/validateFlashCard";

// config inicial
require("dotenv").config();
const express = require("express");
const router = express.Router();

// rotas
router.post("/flashcard", validateFlashCard, FlashCardController.create);
router.get("/flashcard", FlashCardController.getAll);
router.get("/flashcard/:subject", FlashCardController.getBySubject);
router.patch("/flashcard/:id", validateFlashCard, FlashCardController.update);
router.delete("/flashcard/:id", FlashCardController.delete);

export default router;
