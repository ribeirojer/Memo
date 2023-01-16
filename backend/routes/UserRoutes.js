// config inicial
const express = require("express");
const router = express.Router();

// controller
const userController = require("../controller/user/user.controller");

function checkToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ msg: "Acesso negado!" });

  try {
    const secret = process.env.SECRET;

    jwt.verify(token, secret);

    next();
  } catch (err) {
    res.status(400).json({ msg: "O Token é inválido!" });
  }
}

// routes
router.get("/user/:id", checkToken, userController.privateRoute);
router.post("/auth/register", userController.register);
router.post("/auth/login", userController.login);

module.exports = router;
