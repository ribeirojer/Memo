const UserModel = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
import { logger } from "app";
import { sendEmail } from "../utils/sendEmail";

export class UserController {
  static async register(req, res): Promise<any> {
    const { name, email, password } = req.body;

    // check if user exists
    const userExists = await UserModel.findOne({ email: email });

    if (userExists) {
      logger.warn("User register failed", {
        error: "User register failed",
      });
      return res.status(422).json({ msg: "Por favor, utilize outro e-mail!" });
    }

    // create password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    // create user
    const user = new UserModel({
      name,
      email,
      password: passwordHash,
    });

    try {
      await user.save();

      logger.info("User login success", { email: req.body.email });
      res.status(201).json({ name: name, msg: "Usuário criado com sucesso!" });
    } catch (error) {
      logger.error("An error occurred", { error: "An error occurred" });
      res.status(500).json({ msg: error });
    }
  }

  static async login(req, res): Promise<any> {
    const { email, password } = req.body;

    // check if user exists
    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ msg: "Usuário não encontrado!" });
    }
    // check if password match
    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      logger.warn("User login failed", { email: req.body.email });
      res.status(422).json({ msg: "Senha inválida" });
    }

    // check if account is active
    if (!user.isActive) {
      return res
        .status(401)
        .json({ msg: "Esta conta está desativada, por favor reative" });
    }

    try {
      const secret = process.env.SECRET;

      const token = jwt.sign(
        {
          id: user._id,
        },
        secret
      );

      logger.info("User login success", { email: req.body.email });
      res.status(200).json({ name: user.name, token });
    } catch (error) {
      logger.error("An error occurred", { error: "An error occurred" });
      res.status(500).json({ msg: error });
    }
  }

  static async privateRoute(req, res): Promise<any> {
    const id = req.params.id;

    // check if user exists
    const user = await UserModel.findById(id, "-password");

    if (!user) {
      return res.status(404).json({ msg: "Usuário não encontrado!" });
    }

    res.status(200).json({ user });
  }

  static async forgotPassword(req, res): Promise<any> {
    const { email } = req.body;
    try {
      // check if user exists
      const user = await UserModel.findOne({ email });
      if (!user) {
        return res.status(404).json({ msg: "Usuário não encontrado!" });
      }
      //generate token
      const secret = process.env.SECRET;
      const token = jwt.sign(
        {
          id: user._id,
        },
        secret,
        { expiresIn: "1h" }
      );

      //send email
      const emailData = {
        from: "eduardojerbr@gmail.com",
        to: email,
        subject: "Recuperação de senha Memo",
        html: `
          <p>Você solicitou a recuperação de senha</p>
          <p>Clique no link abaixo para redefinir sua senha</p>
          <a target="_blank" href="http://localhost:5173/reset-password/${token}">Clique aqui</a>
        `,
      };

      await sendEmail(emailData);

      res.status(200).json({ msg: "E-mail de recuperação de senha enviado!" });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  static async resetPassword(req, res): Promise<any> {
    const { token, password } = req.body;

    try {
      //verify token
      const secret = process.env.SECRET;
      const decoded = jwt.verify(token, secret);

      //check if user exists
      const user = await User.findById(decoded.id);
      if (!user) {
        return res.status(404).json({ msg: "Usuário não encontrado!" });
      }

      //hash the new password
      const salt = await bcrypt.genSalt(12);
      const passwordHash = await bcrypt.hash(password, salt);

      //save new password
      user.password = passwordHash;
      await user.save();
      res.status(200).json({ msg: "Senha redefinida com sucesso!" });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  static async deactivateAccount(req, res): Promise<any> {
    const userId = req.params.id;
    try {
      const user = await UserModel.findById(userId);
      if (!user) {
        return res.status(404).json({ msg: "Usuário não encontrado!" });
      }
      user.isActive = false;
      await user.save();
      res.status(200).json({ msg: "Conta desativada com sucesso!" });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  static async reactivateAccount(req, res): Promise<any> {
    const userId = req.params.id;
    try {
      const user = await UserModel.findById(userId);
      if (!user) {
        return res.status(404).json({ msg: "Usuário não encontrado!" });
      }
      user.isActive = true;
      await user.save();
      res.status(200).json({ msg: "Conta reativada com sucesso!" });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }
}
