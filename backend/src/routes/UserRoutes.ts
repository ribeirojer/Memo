import { UserController } from "controllers/user.controller";
import { checkToken } from "middlewares/checkToken";
import {
  forgotPasswordLimiter,
  validateForgotPassword,
} from "middlewares/validateForgotPassword";
import { validateLoginData } from "middlewares/validateLoginData";
import { validateRegisterData } from "middlewares/validateRegisterData";

require("dotenv").config();
const express = require("express");
const router = express.Router();

// Private Route
router.get("/user/:id", checkToken, UserController.privateRoute);
router.post("/auth/register", validateRegisterData, UserController.register);
router.post("/auth/login", validateLoginData, UserController.login);
router.post(
  "/auth/forgot-password",
  forgotPasswordLimiter,
  validateForgotPassword,
  UserController.forgotPassword
);
router.post("reset-password/${token}", UserController.resetPassword);
router.post("/auth/reactivateAccount", checkToken, UserController.reactivateAccount);
router.post("/auth/deactivateAccount", checkToken, UserController.deactivateAccount);

export default router;
