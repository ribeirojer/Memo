const UserModel = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
import { sendEmail } from "../utils/sendEmail";

export class UserController {
  static async register(req, res): Promise<any> {
    const { name, email, password, confirmPassword } = req.body;

    // check if user exists
    const userExists = await UserModel.findOne({ email: email });

    if (userExists) {
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

      res.status(201).json({ msg: "Usuário criado com sucesso!" });
    } catch (error) {
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
      return res.status(422).json({ msg: "Senha inválida" });
    }

    try {
      const secret = process.env.SECRET;

      const token = jwt.sign(
        {
          id: user._id,
        },
        secret
      );

      res
        .status(200)
        .json({ msg: "Autenticação realizada com sucesso!", token });
    } catch (error) {
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
      const user = await User.findOne({ email });
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
        from: "myapp@email.com",
        to: email,
        subject: "Recuperação de senha",
        html: `
          <p>Você solicitou a recuperação de senha</p>
          <p>Clique no link abaixo para redefinir sua senha</p>
          <p>http://localhost:3000/reset-password/${token}</p>
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
}