const express = require("express");
const router = express.Router();
const upload = require("../config/multer");
import { PictureController } from "../controllers/pictureController";

router.post("/", upload.single("file"), PictureController.create);
router.get("/", PictureController.findAll);
router.delete("/:id", PictureController.remove);

export default router;