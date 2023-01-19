import { UserController } from "controllers/user.controller";
import { checkToken } from "middleware/checkToken";

require("dotenv").config();
const express = require("express");
const router = express.Router();

// Private Route
router.get("/user/:id", checkToken, UserController.privateRoute);
router.post("/auth/register", UserController.register);
router.post("/auth/login", UserController.login);

export default router;
