const rateLimit = require("express-rate-limit");

export function validateForgotPassword(req, res, next): any {
  const { email } = req.body;

  // validations
  if (!email) {
    return res.status(422).json({ msg: "O email é obrigatório!" });
  }

  next();
}

// rate-limiting middleware
export const forgotPasswordLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: "Too many requests, please try again later",
});
